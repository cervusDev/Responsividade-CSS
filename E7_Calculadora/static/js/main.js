// get all characters 
const cards = document.querySelectorAll('.hover-selected')
const button = document.querySelector('button-selected')

// selector for each character
for (const card of cards) {
card.addEventListener("click", markerChar)
}

for (const button of buttons) {
    button.addEventListener('click', markerButton)
}

function markerChar() {
    const championsName = this.getAttribute('data-name')

        if (!this.classList.contains('selector')) {
            this.classList.add('selector')

        } else {
            this.classList.remove('selector')
        }

        const championsSelected = document.querySelectorAll('.selector')
        
        
        // selecionar apenas dois personagens
        if (championsSelected.length >=3) {
            window.alert('só é possível escolher 2 personagens por rodada')
            this.classList.remove('selector')

            console.log(championsSelected)
        }
}

// select button 

button.addEventListener('click')



