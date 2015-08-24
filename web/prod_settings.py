from settings import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '18xs&uckt4fe5qo3j*ss3a1*@=ekq5v@#dw6u-gnrgwo&g&k!m'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['52.26.213.16']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'prod',
        'USER': 'web',
        'PASSWORD': '+k1UnULgChRj+HFCekIu',
        'HOST': 'localhost',
        'PORT': '',
    }
}
