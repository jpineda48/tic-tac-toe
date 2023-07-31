






// /*----- constants -----*/

let turn;


// /*----- state variables -----*/


// /*----- cached elements  -----*/

const choices = document.querySelector('#board');
const letter = document.querySelectorAll('div h3');




// /*----- event listeners -----*/

choices.addEventListener('click' ,changeTurn)





// console.log(letter[0].innerText)

// letter[0].innerText = "okay cool"



// 	/*----- functions -----*/

///turns

function init() {
    // set values for our initial state variables
    turn = 1
    winner = null

    board = [
        [0, 0, 0, 0, 0, 0], // col 0
        [0, 0, 0, 0, 0, 0], // col 1
        [0, 0, 0, 0, 0, 0], // col 2
    ]
    render()
}

function changeTurn(){
    if(nextTurn =='X'){
        
         nextTurn = 'O';
         
    } else {
         nextTurn = 'X';
    }
}
////


    function player1Choice (evt){
        const cell = evt.target
        // const mAC= prompt("X OR O")
        if (cell.id === "c0r0") {
            letter[6].innerText = 'O'
        } else if (cell.id === "c1r0") {
            letter[7].innerText = 'O'
        } else if (cell.id === "c2r0") {
            letter[8].innerText = 'O'
            //
        }else if (cell.id === "c0r1") {
            letter[3].innerText = 'O'
        } else if (cell.id === "c1r1") {
            letter[4].innerText = 'O'
        }else if (cell.id === "c2r1") {
            letter[5].innerText = 'O'
        }else if (cell.id === "c0r2") {
            letter[0].innerText = 'O'
        }else if (cell.id === "c1r2") {
            letter[1].innerText = 'O'
        }else if (cell.id === "c2r2") {
            letter[2].innerText = 'O'
        }
    };


