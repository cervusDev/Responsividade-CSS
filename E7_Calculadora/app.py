from flask import Flask, app, render_template

app = Flask(__name__)

@app.route('/')
def home():

    ahri = [{'nome': 'ahri', 'historia':'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia' }]
    braum = [{'nome': 'braum' , 'historia': 'Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord. Cada salão de hidromel ao norte de Frostheld brinda sua força lendária'}]
    aurelion = [{'nome': 'Aurelion Sol' , 'historia': 'Aurelion Sol costumava agraciar a vasta imensidão vazia dos cosmos com maravilhas celestiais concebidas por ele mesmo.'}]
    fizz = [{'nome': 'fizz' , 'historia': 'Fizz é um yordle anfíbio que vive entre os recifes que rodeiam Águas de Sentina. Irrita-lo não é uma boa ideia.'}]
    heim = [{'nome': 'heim' , 'historia': ' Professor Cecil B. Heimerdinger é um dos inventores mais inovadores e estimados que Piltover já conheceu.'}]
    anivia = [{'nome': 'anivia' , 'historia': 'Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, morte e renascimento para proteger Freljord.'}]


  
    caminhoImagem = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

    return render_template(
    'main.html',
    caminhoImagem = caminhoImagem,
    ahri = ahri,
    braum = braum,
    aurelion = aurelion,
    fizz = fizz,
    heim = heim,
    anivia = anivia
    )

if __name__ == '__main__':
    app.run(debug = True)
