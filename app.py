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
    'k' : 'thank',
    'n' : 'k'
}

answers_mapping = {
    'f' : 'flask',
    'a' : 'apple',
    'v' : 'vagrant',
    'd' : 'django',
    's' : 'slack',
    'am' : 'amazon',
    'r' : 'rasberry pi',
    'so' : 'docker',
    'ar' : 'argocd',
    'k' : 'kubernetes',
    'n' : 'nginx'
}

app = Flask(__name__ , template_folder='template')

@app.route("/")
def hello():
    return redirect('/f')
    
@app.route("/<cclue>")
def home(cclue):
    return render_template(cclue+'.html')

@app.route("/user_response")
def response():
    answer = request.args['answer']
    cpage = request.args['cpage']
    if answers_mapping[cpage].lower() != answer:
        ans = {'err' : 'wrong answer'}
    else:
        ans = {'done' : response_mapping[cpage]}
    print(ans)
    return ans

if __name__ == "__main__":
    app.run(host='0.0.0.0',port='5000')
    

    