from flask import Flask
import time
import RPi.GPIO as GPIO
import json

app = Flask(__name__)
@app.route('/')
def index():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(17, GPIO.OUT)
    GPIO.output(17, GPIO.LOW)

    time.sleep(2)
    
    GPIO.output(17, GPIO.HIGH)
    GPIO.cleanup()
    return json.dumps({'statusCode':200})

if __name__ == '__main__':
    app.run(debug=True, port=5050, host='0.0.0.0')