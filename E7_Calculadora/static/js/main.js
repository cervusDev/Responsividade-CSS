// selecionar a div dos personagens 
const cards = document.querySelectorAll('.hover-selected')

// let firstChacarter;
let secondChatacter ;

// Selecionar cada personagem

for (const card of cards) {
    card.addEventListener("click", function() {
        const championsName = this.getAttribute('data-name')

        let n = 0
        while (n <= 2){

            if (!this.classList.contains('selector')) {
                this.classList.add('selector')
    
    
            } else {
                this.classList.remove('selector')
    
                const championsSelected = document.querySelectorAll('.selector')
            }
        }
        
    })
}

// calcular dano 

// function calcularDano() {
//     if (!hover-selected || !secondChatacter) {
//         alert('Selecione o personagem e a arma para calcular o dano')
//     }
// }