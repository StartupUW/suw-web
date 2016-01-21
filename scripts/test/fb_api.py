from lib.fb import *
import unittest
import sqlalchemy
from sqlalchemy import *
from sqlalchemy.sql import select

class TestFacebook(unittest.TestCase):

	def test_token(self):
		token = get_token()
		self.assertIsNotNone(token)
		self.assertNotEqual(len(token), 0)
		self.assertIsInstance(token, basestring)

	def test_fb_data(self):
		data = get_fb_data(get_token())
		self.assertNotEqual(len(data), 0)

	def test_db_upload(self):
		data = [{
     	"description": "Mark your calendar, Startup UW is presenting a very special nothing", "end_time": "2016-01-17T21:00:00+0800", "name": "Startup Weekend",
      "place": { "name": "Startup Hall" },
      "start_time": "2016-01-15T18:30:00+0800",
      "id": "733114666826044"
    }, {
      "description": "check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": { "name": "Exec 420" },
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613"
    }]
		data = parse_fb_data(data)
		engine, conn = connect_db('suwtesting')
		events = get_events_schema()
		flush_events_table(conn, engine, events)
		fill_events_table(conn,  events, data)

		count = conn.execute(select([events])).fetchall()
		self.assertEquals(len(data), len(count))

if __name__ == '__main__':
	unittest.main()
