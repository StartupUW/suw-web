import requests
import sqlalchemy
from sqlalchemy import *

# APP CONSTANTS
CLIENT_ID = '912240588829356'
CLIENT_SECRET = 'cf8d4abe8b14cdc7d03f1a23f9abcbe6'

# Gets the access token from the facebook server
r = requests.get('https://graph.facebook.com/oauth/access_token?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&grant_type=client_credentials')
token = r.text.split('=')[1]

# Get the data from the facebook api
url = 'https://graph.facebook.com/StartupUW/events?access_token=' + token
data = []
while(url != None):
	r = requests.get(url)
	data.extend(r.json()['data'])
	if('next' in r.json()['paging']):
		url = r.json()['paging']['next']
	else:
		url = None

# Start a connection
engine = create_engine('postgresql+psycopg2://postgres:asdfasdf@localhost/suw')
conn = engine.connect()

# The Database Schema
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
	Column('timestamp', TIMESTAMP(timezone=True), default=func.now())
)
events.drop(engine, checkfirst=True)
metadata.create_all(engine)

# Get every event and add it to the database
events_data = []
for event in data:
	event_data = {
		'id' : event['id'],
		'name' : event['name'],
		'desc' : event['description'],
		'place' : None,
		'start_time' : event['start_time'],
		'end_time' : None,
		'lat' : None,
		'lng' : None
	}
	if('end_time' in event):
		event_data['end_time'] = event['end_time']	
	if('place' in event):
		if('location' in event['place']):
			event_data['lat'] = event['place']['location']['latitude']
			event_data['lng'] = event['place']['location']['longitude']
		if('name' in event['place']):
			event_data['place'] = event['place']['name']
	
	events_data.append(event_data)

conn.execute(events.insert(), events_data)

