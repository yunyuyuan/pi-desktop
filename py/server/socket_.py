from flask_socketio import SocketIO, emit
from . import app
from utils.hardware import get_cpu_temp, get_cpu_usage, get_wifi_status, get_ram_usage
from utils.weather import get_weather

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


@socket_io.on('get_weather')
def _get_weather():
    emit('weather_data', get_weather())


@socket_io.on('get_todo')
def _get_todo():
    emit('todo_data', get_todo())
