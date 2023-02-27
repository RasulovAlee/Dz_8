// const func1 = (a, b) => {
//     if (a < b){
//         console.log(a)
//     }else if (a > b){
//         console.log(b)
//     }
// }
// func1(1,6)

// const func2 = (text) => {
//     text = prompt('')
//     console.log(text.length)
// }
// func2()

const num1 = Number(prompt('num1'))
const op = prompt('+,-,/,*').trim()
const num2 = Number(prompt('num2'))

let result
const calc = () => {
    if (op === '+'){
        result = num1 + num2
    }else if (op === '-'){
        result = num1 - num2
    }else if (op === '*'){
        result = num1 * num2
    }else if (op === '/'){
        (num1 === 0 || num2 === 0) ? result = 'Error' : result = num1 / num2
    }else {
        alert('Error')
    }
    alert(result)
}
calc()