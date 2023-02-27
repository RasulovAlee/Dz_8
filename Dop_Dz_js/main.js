
const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const ground = new Image()
ground.src = 'img/ground.png'

const burger = new Image()
burger.src = 'img/burger.png'

const hotdog = new Image()
hotdog.src = 'img/hotdog.png'

const pizza = new Image()
pizza.src = 'img/pizza.png'

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

function setModal() {
    const div = document.createElement('div')
    const restart = document.createElement('p')
    const sCore = document.createElement('h4')

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 32){
            location.reload()
        }
    })

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
         foodsRan = foods[Math.floor(Math.random() * 3)]

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
      ctx.drawImage(foodsRan, food.x, food.y)

}

const foods = [pizza,burger, hotdog]
let foodsRan = foods[Math.floor(Math.random() * 3)]

let game = setInterval(drawGame, 100)
