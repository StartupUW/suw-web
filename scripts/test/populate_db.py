import os
import requests
import sqlalchemy
from sqlalchemy import *

PG_USER = os.environ['PG_USER']
PG_PASSWORD = os.environ['PG_PASSWORD']

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
	engine, conn = connect_db('suw')
	events = get_events_schema()
	flush_events_table(conn, engine, events)
	mock_event = {
		'id' : 1,
		'name' : 'Test Event',
		'desc' : 'Test description',
		'place' : 'Test place',
		'start_time' : '2016-1-21 00:00:00.000000-08',
		'end_time' : '2016-1-22 00:00:00.000000-08',
		'lat' : None,
		'lng' : None,
		'cover' : None
	}
	fill_events_table(conn,  events, [mock_event])

if __name__ == "__main__":
	main()
