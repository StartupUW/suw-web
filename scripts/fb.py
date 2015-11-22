import requests
import sqlalchemy
from sqlalchemy import *

# APP CONSTANTS
CLIENT_ID = '912240588829356'
CLIENT_SECRET = 'cf8d4abe8b14cdc7d03f1a23f9abcbe6'

# Gets the access token from the facebook server
r = requests.get('https://graph.facebook.com/oauth/access_token?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&grant_type=client_credentials')
token = r.text.split('=')[1]

r = requests.get('https://graph.facebook.com/StartupUW/events?access_token=' + token)
data = r.json()['data']

for event in data:
	print event['name']

engine = create_engine('postgresql+psycopg2://postgres:asdfasdf@localhost/suw')
conn = engine.connect()

metadata  = MetaData()
events = Table('events', metadata,
	Column('id', BigInteger, primary_key=True),
	Column('name', String, nullable=False),
	Column('desc', String),
	Column('place', String, nullable=False),
	Column('lat', Numeric, nullable=True),
	Column('lng', Numeric, nullable=True),
	Column('start', DateTime, nullable=False),
	Column('end', DateTime, nullable=True)
)
metadata.create_all(engine)

for event in data:
	events_data = {
		'id' : event['id'],
		'name' : event['name'],
		'desc' : event['description'],
		'place' : event['place']['name'],
		'start' : event['start_time'],
	}
	if('end_time' in event):
		events_data['end'] = event['end_time']	
	if('location' in event['place']):
		events_data['lat'] = event['place']['location']['latitude']
		events_data['lng'] = event['place']['location']['longitude']

	conn.execute(events.insert(), events_data)

