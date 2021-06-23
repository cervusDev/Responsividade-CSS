from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():

  herois = [ {'nome': 'Ahri' }, {'nome': 'Braum'}, {'nome': 'AurelionSol'},
  {'nome': 'Fizz'}, {'nome': 'Heimerdinger'}, {'nome': 'Anivia'}] 

  infos = [{'texto': 'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia'}, {'texto':'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia'}, {'texto': 'Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo'}, {'texto': 'Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina. Irrita-lo não é uma boa ideia.'}, {'text': 'Professor Cecil B. Heimerdinger é um dos inventores mais inovadores e estimados que Piltover já conheceu.'}, {'texto': 'Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, morte e renascimento para proteger Freljord.'}]

  caminhoImagem = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

  return render_template(
    'main.html',
    herois = herois,
    caminhoImagem = caminhoImagem,
    infos
  )
if __name__ == '__main__':
  app.run(debug = True)
