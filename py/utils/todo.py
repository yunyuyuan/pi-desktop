from requests import get
from . import config


def get_todo():
    return []
    try:
        result = get('https://graph.microsoft.com/v1.0/me/todo/lists/AQMkADAwATMwMAItZmNiZi1kMDYwLTAwAi0wMAoALgAAAzrG30vAoBZHmAn6CwLcCnEBAKPN8TA_GCtJtWsf67tvtDgABTbKztIAAAA=/tasks', headers={
            'Authorization': f'Bearer {config["ms_token"]}'
        })
        return [x['title'] for x in result.json()['value']]
    except BaseException as e:
        return []
