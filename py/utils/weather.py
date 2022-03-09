from requests import get
from . import config

latitude = '31.0281'
longitude = '121.4159'


def get_weather():
    try:
        result = get(
            f'https://api.caiyunapp.com/v2.5/{config["caiyun_token"]}/{longitude},{latitude}/weather.json?alert=true')
        return result.json()
    except BaseException as e:
        return str(e)
