from flask import Flask
from json import load
from os.path import realpath

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = '15ASDF3q$R#QHae574#RFQjw543qaGQ%#$HWB#'


def start():
    from . import http_
    from . import socket_
    with open(realpath('../../../config.json')) as fp:
        json = load(fp)
        app.run(port=json['port'])
