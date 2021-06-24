from flask import Flask, app, render_template

app = Flask(__name__)

@app.route('/')
def home():

    herois = [ {'nome': 'Ahri', 'texto': 'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia'}, {'nome': 'Braum', 'texto':'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia'}, {'nome': 'AurelionSol', 'texto': 'Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo'}] 
  
    caminhoImagem = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

    return render_template(
    'main.html',
    caminhoImagem = caminhoImagem,
    herois = herois,
    )

if __name__ == '__main__':
    app.run(debug = True)
