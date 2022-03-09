from flask import Flask
from flask_cors import CORS

from utils import config

app = Flask(__name__)
CORS(app)
app.debug = True
app.config['SECRET_KEY'] = '15ASDF3q$R#QHae574#RFQjw543qaGQ%#$HWB#'


def start(host='127.0.0.1'):
    from . import socket_
    app.run(host=host, port=config['port'])
