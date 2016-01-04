from lib.fb import *
import unittest

class TestFacebookStuff(unittest.TestCase):
	
	def test_token(self):
		token = get_token()
		self.assertIsNotNone(token)
		self.assertNotEqual(len(token), 0)
		self.assertIsInstance(token, basestring)

if __name__ == '__main__':
	unittest.main()
