// selecionar a div dos personagens 
const cards = document.querySelectorAll('.hover-selected')

// Selecionar cada personagem
for (const card of cards) {
    card.addEventListener("click", function(event) {
        const championsName = this.getAttribute('data-name')

        if (!this.classList.contains('selector')) {
            this.classList.add('selector')

        } else {
            this.classList.remove('selector')

            const championsSelected = document.querySelectorAll('.selector')
        }
    })
}