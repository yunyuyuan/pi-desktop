from json import load
import pathlib

with open(pathlib.Path(__file__).parent.parent.parent.joinpath('config.json').resolve()) as fp:
    config = load(fp)
