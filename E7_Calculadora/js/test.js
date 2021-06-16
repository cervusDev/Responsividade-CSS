let selectedFirstCharacter;
let selectedSecondCharacter;

function init() {
    const characters = document.querySelectorAll('.characters')

    for (const character of characters) {
        character.addEventListener('click',selecionaChar)
    }
    document.getElementById('atacar').addEventListener('click', calcularDano)
}

function selecionaChar (evento) {
    const charSelecionado = evento.target.parentElement;

    if (!charSelecionado.classList.contains('characters')) {
        return;
    }

    const classElementoSelecionado = charSelecionado.getAttribute('class')

    if (charSelecionado.classList.contains('characters')) {
        selectedFirstCharacter = classElementoSelecionado;
        // limparElementosSelecionados('characters')
    } else {
        armaSelecionada = classElementoSelecionado;
    // }   limparElementosSelecionados('characters')
    }

    charSelecionado.classList.add('seletor')
}