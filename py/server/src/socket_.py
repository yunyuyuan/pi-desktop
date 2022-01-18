from flask_socketio import SocketIO, emit
from . import app
from utils.hardware import get_cpu_temp, get_cpu_usage, get_wifi_status, get_ram_usage

socket_io = SocketIO(app, cors_allowed_origins='*')
socket_io.background_started = False


@socket_io.on('connect')
def connect(auth):
    pass


@socket_io.on('disconnect')
def disconnect():
    pass


@socket_io.on('get_data')
def get_data():
    cpu_temp = get_cpu_temp()
    cpu_usage = get_cpu_usage()
    ram_usage = get_ram_usage()
    wifi_status = get_wifi_status()
    emit('return_data', {
        'cpu_temp': cpu_temp,
        'cpu_usage': cpu_usage,
        'ram_usage': ram_usage,
        'wifi_status': wifi_status,
    })
