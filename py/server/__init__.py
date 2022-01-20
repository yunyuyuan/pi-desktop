from flask import Flask
from flask_cors import CORS

from utils import config

app = Flask(__name__)
CORS(app)
app.debug = True
app.config['SECRET_KEY'] = '15ASDF3q$R#QHae574#RFQjw543qaGQ%#$HWB#'


def start():
    from . import http_
    from . import socket_
    app.run(port=config['port'])
