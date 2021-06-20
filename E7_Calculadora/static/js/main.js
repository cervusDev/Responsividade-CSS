const firstAttack = {
    'Ahri': 13,
    'Braum': 16,
    'Aurelion': 19,
};

const secondAttack = {
    'Fizz': 8,
    'Heim': 8,
    'Anivia': 8,
};

let firstChampion;
let secondChampion;

function init() {
    const firstCards = document.querySelectorAll('.first-selected')

    //get second row characters
    const secondCards = document.querySelectorAll('.second-selected')

    //get button
    const button = document.getElementById('button-selected')

    // get button to calc
    const buttonCalc = document.getElementById('attack')

    for (const card of firstCards) {
        card.addEventListener("click", markerFirstChampion)
        }
        
        for (const card of secondCards) {
            card.addEventListener("click",markerSecondChampion)
        }
        
    button.addEventListener('click', markerButton)
    buttonCalc.addEventListener('click', calculator)



}

// select first character
function markerFirstChampion() {
    const first = this.getAttribute('data-first')
    
    if (!this.classList.contains('first-selector')) {
        this.classList.add('first-selector')
        this.classList.add('all-selector')
    } else {
        this.classList.remove('first-selector')
        this.classList.remove('all-selector')
    }

    firstChampion = first
    console.log(firstChampion)
}

// select second character
function markerSecondChampion() {
    const second = this.getAttribute('data-second')
    
    if (!this.classList.contains('second-selector')) {
        this.classList.add('second-selector')
        this.classList.add('all-selector')
    } else {
        this.classList.remove('second-selector')
        this.classList.remove('all-selector')
    }

    secondChampion = second
    console.log(secondChampion)
}

// select button
function markerButton() {
    const button = this.getAttribute('data-button')

    if (!this.classList.contains('selector-button')) {
        this.classList.add('selector-button')
    } else {
        this.classList.remove('selector-button')
    }

    const firstAndSecondchampionsSelected = document.querySelectorAll('.all-selector')

    if (firstAndSecondchampionsSelected.length >= 3) {
        const button = document.getElementById('button-selected')

        button.innerHTML = `<button id = 'atacar' type="submit">
        <p>Negado</p>
        </button>`

    } else {

        button.innerHTML = `<button id = 'atacar' type="submit">
        <p>Atacar</p>
        </button>`

    }
}

// Calculator Damage

function calculator() {

    if (!firstChampion || !secondChampion) {
        alert('selecione um campeão')
        return;
    }
    
    const min = Math.ceil(1)
    const max = Math.floor(10)

    const diceDamage = Math.floor(Math.random() * (max - min + 1)) + min

    const damageSecond = secondAttack[secondChampion]

    const allDamage = diceDamage + damageSecond
    const championLife = firstAttack[firstChampion]
    
    let resultado = `Dano: ${allDamage}!`
    // criar o html
    if (allDamage >= championLife) {
        const button = document.getElementById('button-selected')

        button.innerHTML = `<button id = 'atacar' type="submit">
        <p>${secondChampion} wins!</p>
        </button>`
        // resultado += `${secondChampion} foi o campeão`
        // console.log(resultado)
        return;
    } else {

        button.innerHTML = `<button id = 'atacar' type="submit">
        <p>${firstChampion} wins!</p>
        </button>`
        return;
    }
}
