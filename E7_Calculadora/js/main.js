// get all character
const characters = document.querySelectorAll(".characters")

// select character

function selectCharacter(event) {
    console.log(event.target)
    
    //click
    let selectChar = getChar(event)
    //typed press character

    // if character exist

    // select character
}

function getChar(event) {

    let clickChar;
    const isClick = event.type === "click" //True or false
    if (isClick) {
        clickChar = event.clickChar
    } else {
        clickChar = event.target.characters   
    }

}

//click with mouse 
characters.forEach(function(characters){
    characters.addEventListener("click", selectCharacter)
})

// keyboard type 

window.addEventListener("keydown", selectCharacter)