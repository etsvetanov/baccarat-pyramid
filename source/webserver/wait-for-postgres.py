import os
import sys
import time

args = sys.argv

print('my_script: waiting for database to come up...')
while os.system('ping -c 1 ' + args[1]) != 0:
    time.sleep(0.5)
print('my_script: database container should be up!')

print('my_script: installing project')
os.system('$VENV/bin/pip install -e Baccarat/')

print('my_script: initializing db')
os.system('$VENV/bin/initialize_Baccarat_db development.ini')
