from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():

  herois = [ {'nome': 'Ahri', 'texto': 'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia' }, {'nome': 'Braum', 'texto':'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia'}, {'nome': 'AurelionSol', 'texto':'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia'},
  {'nome': 'Fizz', 'texto': 'Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo'}, {'nome': 'Heimerdinger', 'texto': 'Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina. Irrita-lo não é uma boa ideia.'}, {'nome': 'Anivia', 'texto': 'Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, morte e renascimento para proteger Freljord.'}] 

  caminhoImagem = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

  return render_template(
    'main.html',
    herois = herois,
    caminhoImagem = caminhoImagem,
  )
if __name__ == '__main__':
  app.run(debug = True)
