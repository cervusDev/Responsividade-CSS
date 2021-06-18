// get all characters 
const cards = document.querySelectorAll('.hover-selected')
const buttons = document.getElementById('button-selected')
const props = document.querySelectorAll('.card-info')

// for (const prop of props) {
//     prop.addEventListener('click', markerProps)
// }

for (const card of cards) {
card.addEventListener("click", markerChampion)
}

buttons.addEventListener('click', markerButton)

// select character
function markerChampion() {
    const champions = this.getAttribute('data-name')
    
    if (!this.classList.contains('selector')) {
        this.classList.add('selector')
    } else {
        this.classList.remove('selector')
    }

}

//                  Fracassei violentamente

// function markerProps() {
//     const championsProps = this.getAttribute('data-info')

//         if (!this.classList.contains('selector-props')) {
//             this.classList.add('selector-props')
//             console.log(championsProps)
//         } else {

//             this.classList.remove('selector-props')
//             console.log(championsProps)
//         }

// }

// select button 
function markerButton() {
    const buttonName = this.getAttribute('data-button')

    if (!this.classList.contains('selector-button')) {
        this.classList.add('selector-button')
    } else {
        this.classList.remove('selector-button')
    }

    const championsSelected = document.querySelectorAll('.selector')

    if (championsSelected.length >= 3) {
        const buttons = document.getElementById('button-selected')

        buttons.innerHTML = `<button id = 'atacar' type="submit">
        <p>Negado</p>
        </button>`

    }
        
}


