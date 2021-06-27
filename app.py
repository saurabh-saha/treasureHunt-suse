from flask import Flask
from flask.templating import render_template, render_template_string

app = Flask(__name__ , template_folder='template')

@app.route("/")
def hello():
    return render_template('home.html')

@app.route("/swarm")
def swarm():
    return render_template('correct.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0',port='5000')
    

    