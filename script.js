const numberOne = Math.ceil(Math.random()*10)

const numberTwo = Math.ceil(Math.random()*10)

const questionElement = document.getElementById("question")

const inputElement = document.getElementById("input")

const formElement = document.getElementById("form")

const scoreElement = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score")) 

if(!score){
    score = 0;
}

questionElement.innerText = `What is ${numberOne} multiply by ${numberTwo}?`

scoreElement.innerText = `score : ${score}`

const correctAnswer = numberOne * numberTwo;

formElement.addEventListener("submit", ()=>{
    const userAnswer = +inputElement.value
if(userAnswer === correctAnswer){
score ++
updateLocalStorage()
}else{
    score--
updateLocalStorage()

}
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

