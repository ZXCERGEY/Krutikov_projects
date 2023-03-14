const board = document.querySelector('.board')
const body = document.querySelector('body')

let data = [[0, 0, 2, 2], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 0]]
const colors = {
    0: 'lightgrey', 2: '#84FBAC', 4: '#C7B446', 8: '#BEBD7F', 16: '#2E3A23',
    32: '#CBD0CC', 64: '#7E7B52', 128: ' #474B4E', 256: '#8F8F8', 512: '#354D73',
    1024: '#A2231D', 2048: '#75151E'
}

body.addEventListener('keydown', (event) => {
    moveController(event.key)
})

function moveController(key) {
    switch (key) {
        case 'a':
            moveFunc(left, 'left')
            break
        case 'd':
            moveFunc(right, 'right')
            break
        case 'w':
            moveFunc(right, 'right')
            break
        case 's':
            moveFunc(right, 'right','y')
            break
    }
}

function startGame() {
    reDrawField()
}

startGame()

function moveFunc(direction, dir,axis) {
    axis === 'y' && (data = transpose(data))
    clearZeroesAndFills(dir)
    direction()
    axis === 'y' && (data = transpose(data))
    addNumber()
    reDrawField()
}

function left() {
    data.map(row => {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === row[i + 1]) {
                row[i] = row[i] * 2
                row[i + 1] = 0
            }
        }
    })
}
function right() {
    data.map(row => {
        for (let i = row.length - 1; i >= 0; i--) {
            if (row[i] === row[i - 1]) {
                row[i] = row[i] * 2
                row[i - 1] = 0
            }
        }
    })
}

function clearZeroesAndFills(direction) {
    data = data.map(row => row.filter(el => el !== 0))
    data.map(row => {
        while (row.length < 4) {
            direction === 'left' ? row.push(0) : row.unshift(0)
        }
    })
}

function reDrawField() {
    board.innerHTML = ''
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            draw(data[i][j])
        }
    }

    function draw(num) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.backgroundColor = colors[num]
        square.innerHTML = num ? num : ''
        board.append(square)
    }
}

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function checkGameIsOver(){
    let arr = []
    data.forEach(row => row.forEach(el => {
        arr.push(el)
    }))
    return arr.indexOf(0 === -1)
}

function addNumber() {
    const rnd = getRandomNumber(1, 10)
    let isAdded = false
    while (!isAdded) {
        const num1 = getRandomNumber(0, 3)
        const num2 = getRandomNumber(0, 3)
        if (data[num1][num2] === 0) {
            data[num1][num2] = rnd <= 8 ? 2 : 4
            isAdded = true
        }
    }
}

function transpose(array) {
    return array.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), [])
}

function gameOver(){
    body.innerHTML=`
    <div>
    <h1 class="game-over>GAME OVER</h1
    </div>
    `
}