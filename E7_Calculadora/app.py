from flask import Flask, app, render_template

app = Flask(__name__)

@app.route('/')
def home():

    herois = [ {'nome': 'Ahri' }, {'nome': 'Braum'}, {'nome': 'AurelionSol'}] 
  
    caminhoImagem = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

    return render_template(
    'main.html',
    caminhoImagem = caminhoImagem,
    herois = herois,
    )

if __name__ == '__main__':
    app.run(debug = True)
