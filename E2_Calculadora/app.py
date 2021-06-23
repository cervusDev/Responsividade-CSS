from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():

  herois = [ {'nome': 'Ahri' }, {'nome': 'Braum'}, {'nome': 'AurelionSol'},
  {'nome': 'Fizz'}, {'nome': 'Heimerdinger'}, {'nome': 'Anivia'}] 

  caminhoImagem = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

  return render_template(
    'main.html',
    campeoes = herois,
    caminhoImagem = caminhoImagem,
  )
if __name__ == '__main__':
  app.run(debug = True)
