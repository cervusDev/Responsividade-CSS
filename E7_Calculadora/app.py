from flask import Flask, app, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template(
    'main.html',
    'main.js',
    )

if __name__ == '__main__':
    app.run(debug = True)
