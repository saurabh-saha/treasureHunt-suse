from flask import Flask, request, redirect
from flask.templating import render_template, render_template_string

response_mapping = {
    'home' : 'f',
    'f' : 'a',
    'a' : 'v',
    'v' : 'd',
    'd' : 's',
    's' : 'am',
    'am' : 'r',
    'r' : 'so',
    'so' : 'ar',
    'ar' : 'k',
    'k' : 'thank'
}

app = Flask(__name__ , template_folder='template')

@app.route("/")
def hello():
    return redirect('/home')
    
@app.route("/<cclue>")
def home(cclue):
    return render_template(cclue+'.html')

@app.route("/user_response")
def response():
    #print(request.args)
    done_clue_name = request.referrer.split('/')[-1]
    next_clue_name = response_mapping[done_clue_name]
    return redirect('/'+next_clue_name)

if __name__ == "__main__":
    app.run(host='0.0.0.0',port='5000')
    

    