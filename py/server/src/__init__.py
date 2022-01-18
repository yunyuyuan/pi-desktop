from flask import Flask
from json import load
from pathlib import Path

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = '15ASDF3q$R#QHae574#RFQjw543qaGQ%#$HWB#'


def start():
    from . import http_
    from . import socket_
    with open(Path(__file__, '../config.json').resolve()) as fp:
        json = load(fp)
        app.run(port=json['port'])
