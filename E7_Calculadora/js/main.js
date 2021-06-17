let selectedFirstCharacter;
let selectedSecondCharacter;

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