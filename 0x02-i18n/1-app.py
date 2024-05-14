#!/usr/bin/env python3

from flask import Flask, render_template
from flask_babel import Babel


class Config(object):
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_ LOCALE = 'en'
    BABLE_DEFAULT_TIMEZONE = 'UTC'


# configure the flask app
app = Flask(__name__)
app.config.from_object(Config)
bable = Bable(app)


@app.route('/')
def index():
    return render_template('1-index.html')


if __name__ == '__main__':
    app.run(port="5000", host="0.0.0.0", debug=True)
