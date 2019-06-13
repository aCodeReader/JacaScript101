let Xscore = 0 
let tie = 0 
let Oscore = 0
const Xscor = document.getElementById('ply1')
const draw = document.getElementById('draw')
const Oscor = document.getElementById('ply2')

function startGame() {
    for(var i = 1; i <= 9; i++){
        reset(i);
    }
    document.turn ='X';
    document.winner = null;
    setMess(document.turn + " goes first")
}


function setMess(msg){
document.getElementById('message').innerText = msg;
}

function mark(column){
    if (document.winner != null){
    setMess(document.turn + " HAS BEATEN YOU")
    }else if(column.innerText == '') {
    column.innerText = document.turn;
    switchT();
    } else {
        setMess('Pick new space')
    }
}

function switchT() {
    if (checkForWinner(document.turn)){
        setMess("Winner!! " + document.turn + " is the Winner!!")
        document.winner = document.turn;
        if(document.winner === 'X'){
            Xscore++
            Xscor.innerHTML = `X Score: ${Xscore}`
        } else if (document.winner === 'O' ){
            Oscore++
            Oscor.innerHTML = `O Score: ${Oscore}`
        } else{
            tie++
            draw.innerHTML = `Draw: ${tie}`
        } 
    
    } else if(document.turn == 'X') {
        document.turn = 'O';
        setMess("It is " + document.turn + "'s turn")
    } else {
        document.turn = 'X'
        setMess("It is " + document.turn + "'s turn")
    }

}

    function checkForWinner(move){
        let result = false;
    if(checkRow(1,2,3, move) ||
        checkRow(4,5,6, move) ||
        checkRow(7,8,9, move) ||
        checkRow(1,4,7, move) ||
        checkRow(2,5,8, move) ||
        checkRow(3,6,9, move) ||
        checkRow(1,5,9, move) ||
        checkRow(3,5,7, move)) {
        return result = true;
    }
    
        return result;
    }

function checkRow(a, b, c, move){
    let result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move ){
        result = true;
    }
    return result;
}
function getBox(number) {
    return document.getElementById("s" + number).innerText;
    
}

function reset(number) {
    document.getElementById("s"+ number).innerText = "";
}