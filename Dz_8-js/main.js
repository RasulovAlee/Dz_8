// const on = document.querySelector('#on')
// const off = document.querySelector('#off')
// const light = document.querySelector('#light')
//
// on. addEventListener('click', () => {
//      light.style.backgroundColor = 'white'
// })
// off.addEventListener('click', () => {
//      light.style.backgroundColor = 'rgba(0, 0, 0, 0)'
// })




// const light = document.querySelector('#light')
//
// document.addEventListener('keydown', (event) => {
//      if (event.keyCode === 39){
//           light.style.backgroundColor = 'white'
//      }
// })
// document.addEventListener('keydown', (event) => {
//      if (event.keyCode === 37) {
//           light.style.backgroundColor = 'rgba(0, 0, 0, 0)'
//      }
// })



// const light = document.querySelector('#light')
//
//
// const text = prompt('Choose color')
//
// if (text === 'on'){
//      light.style.backgroundColor = 'white'
// }else if (text === 'off') {
//      light.style.backgroundColor = 'rgba(0, 0, 0, 0)'
// }else {
//      light.style.backgroundColor = 'red'
// }


// const number1 = Number(prompt('number 1'))
// const op = prompt('/,+,-,*')
// const number2 = Number(prompt('number 2'))
//
const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const ground = new Image()
ground.src = 'img/ground.png'

const foodImg = new Image()
foodImg.src = 'img/food.png'
//
// const restart = new Image()
// restart.src = 'img/restart.png'

let box = 32

let score = 0

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
}

let snake = []
snake [0] = {
    x: 9 * box,
    y: 10 * box
}

document.addEventListener('keydown', direction)

let dir

function direction(event) {
    if (event.keyCode === 37 && dir !== 'right') dir = 'left'
    else if (event.keyCode === 38 && dir !== 'down') dir = 'up'
    else if (event.keyCode === 39 && dir !== 'left') dir = 'right'
    else if (event.keyCode === 40 && dir !== 'up') dir = 'down'
}


function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x === arr[i].x && head.y === arr[i].y) {
            clearInterval(game)
            setModal()
        }
    }
}

// function reStart (){
//     ctx.drawImage(restart, 0, 0)
//     restart.addEventListener('click', () => {
//         document.location.reload()
//     })
// }
function setModal() {
    const div = document.createElement('div')
    const restart = document.createElement('p')
    const sCore = document.createElement('h4')

    div.setAttribute('class', 'modal')
    restart.textContent = 'Restart'
    document.body.style.background = 'rgba(0, 0, 0, 0.5)'
    document.body.append(div)

    sCore.textContent = score
    div.append(sCore)

    div.append(restart)
    restart.addEventListener('click', () =>{
        location.reload()

    })


}

function drawGame() {
    ctx.drawImage(ground, 0, 0)
    ctx.drawImage(foodImg, food.x, food.y)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'red'
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }

    ctx.fillStyle = 'white'
    ctx.font = '50px Arial'
    ctx.fillText(score, box * 2.5, box * 1.7)

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (snakeX === food.x && snakeY === food.y) {
        score++
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        }
    } else snake.pop()

    if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) {
        clearInterval(game)
        setModal()
    }

    if (dir === 'left') snakeX -= box
    if (dir === 'right') snakeX += box
    if (dir === 'up') snakeY -= box
    if (dir === 'down') snakeY += box

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    eatTail(newHead, snake)

    snake.unshift(newHead)
}

let game = setInterval(drawGame, 100)
