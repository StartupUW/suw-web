import os

os.putenv("PG_USER","web")
os.putenv("PG_PASSWORD","TBtsAH24tfUMek7Q==")
os.putenv("FB_CLIENT_ID","912240588829356")
os.putenv("FB_CLIENT_SECRET","cf8d4abe8b14cdc7d03f1a23f9abcbe6")

os.system("python scripts/fb.py")