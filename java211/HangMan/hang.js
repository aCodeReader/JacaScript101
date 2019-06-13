let word = ['Javascript', 'function', 'Method', 'Push', 'Element', 'Object']
let randomNum = Math.floor(Math.random() * word.length)
let theW = word[randomNum]
let w = theW.length
let rightWord = []
let wrongWord = []
let underScore = []

let docUnderScore = document.getElementById('display')

let genUnderScores = () => {
    for (let i = 0; i < w; i++){
underScore.push('_');
    }
    return underScore
}

document.addEventListener('keypress', (event) => {
let keyword = String.fromCharCode(event.keyCode)

if(theW.indexOf(keyword) > -1){
    rightWord.push(keyword)
    docUnderScore[0].innerHTML = underScore.join('')
    underScore[theW.indexOf(keyword)] = keyword

    if(underScore.join('') == theW){
       setMess("You Win")
    }
} else {
    wrongWord.push(keyword)

}
})






 function setMess(msg){
    document.getElementById('msg').innerText = msg;
    }


//     document.getElementById("btn").onclick = function(){
//         guess(inputText.value);
//     }
    



//     function guess(inputText){
//         if (inputText.value === word){
//             setMess("Your neck is safe for...now")
//         } else if()

        

//     }


   