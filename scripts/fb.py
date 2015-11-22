import requests

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


