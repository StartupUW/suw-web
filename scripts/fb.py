import os
import requests
import sqlalchemy
from sqlalchemy import *

PG_USER = os.environ['PG_USER']
PG_PASSWORD = os.environ['PG_PASSWORD']

CLIENT_ID = os.environ['FB_CLIENT_ID']
CLIENT_SECRET = os.environ['FB_CLIENT_SECRET']

FB_EVENTS_URL = 'https://graph.facebook.com/StartupUW/events?'
FB_GRAPH_URL = 'https://graph.facebook.com/oauth/access_token?'

def get_token():
	r = requests.get(FB_GRAPH_URL + 'client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&grant_type=client_credentials')
	return r.text.split('=')[1]

# Gets the access token from the facebook server
# Get the data from the facebook api
def get_fb_data(token):
	fields = ['cover', 'name', 'description', 'start_time', 'end_time', 'place']
	url = FB_EVENTS_URL + 'fields=' + ','.join(fields) + '&access_token=' + token
	data = []
	while(url != None):
		r = requests.get(url)
		data.extend(r.json()['data'])
		if('next' in r.json()['paging']):
			url = r.json()['paging']['next']
		else:
			url = None
	return data

def parse_fb_data(data):
	events_data = []
	for event in data:
		event_data = {
			'id' : event['id'],
			'name' : event['name'],
			'desc' : None,
			'place' : None,
			'start_time' : event['start_time'],
			'end_time' : None,
			'lat' : None,
			'lng' : None,
			'cover' : None
		}
		if('description' in event):
			event_data['desc'] = event['description']
		if('cover' in event):
			if('source' in event['cover']):
				event_data['cover'] = event['cover']['source']
		if('end_time' in event):
			event_data['end_time'] = event['end_time']
		if('place' in event):
			if('location' in event['place']):
				event_data['lat'] = event['place']['location']['latitude']
				event_data['lng'] = event['place']['location']['longitude']
			if('name' in event['place']):
				event_data['place'] = event['place']['name']
		events_data.append(event_data)
	return events_data

# Start a connection
def connect_db(dbname):
	engine = create_engine('postgresql+psycopg2://' + PG_USER + ':' + PG_PASSWORD + '@localhost/' + dbname)
	conn = engine.connect()
	return engine, conn

# The Database Schema
def get_events_schema():
	metadata  = MetaData()
	events = Table('events', metadata,
		Column('id', BigInteger, primary_key=True),
		Column('name', String, nullable=False),
		Column('desc', String),
		Column('place', String, nullable=True),
		Column('lat', Numeric, nullable=True),
		Column('lng', Numeric, nullable=True),
		Column('start_time', DateTime, nullable=False),
		Column('end_time', DateTime, nullable=True),
		Column('cover', String, nullable=True),
		Column('timestamp', TIMESTAMP(timezone=True), default=func.now())
	)
	return events

# delete all rows from the events table
def flush_events_table(conn, engine, events):
	events.create(engine, checkfirst=True)
	conn.execute(events.delete())

# Get every event and add it to the database
def fill_events_table(conn, events, data):
	conn.execute(events.insert(), data)

def main():
	token = get_token()
	data = get_fb_data(token)
	data = parse_fb_data(data)
	engine, conn = connect_db('suw')
	events = get_events_schema()
	flush_events_table(conn, engine, events)
	fill_events_table(conn,  events, data)

if __name__ == "__main__":
	main()
