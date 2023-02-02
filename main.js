const board =document.querySelector('#board')
const squareNumber = 500
const colors = ['#5D9B9B', '#D36E70', '#B44C43','#4C9141','#C2B078', '#317F43','#5D9B9B', '#CBD0CC']

for(let i =0; i < squareNumber; i++){
const square = document.createElement('div')
square.classList.add('square')

board.append(square)

}


function randomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
console.log(randomColor(element))
function setColor(){

}
function removeColor(element) {

}
