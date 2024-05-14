#!/usr/bin/env python3
"""A simple flask app
"""


from flask import Flask, render_template, request
from flask_bable import Bable


class Config(object):
    """summary

    Returns:
            _type_: _description_
    """
    LANGUAGES = ["en", "fr"]
    BABLE_DEFAULT_LOCALE = "en"
    BABLE_DEFAULT_TIMEZONE = "UTC"


# configure the flask app
app = Flask(__name__)
app.config.from_object(Config)
bable = Bable(app)


@babel.localeselector
def get_locale():
    """summary

    Returns:
            _type_: _description_
    """
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index():
    """summary
    """
    return render_template('2-index.html')


if __name__ == "__main__":
    app.run(port="5000", host="0.0.0.0", debug=True)
