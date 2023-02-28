const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttonsDiv = document.createElement('div')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        buttonsDiv.setAttribute('class', 'buttons_div')
        editButton.setAttribute('class', 'edit_button')
        deleteButton.setAttribute('class', 'delete_button')

        text.innerHTML = input.value
        editButton.textContent = 'EDIT'
        deleteButton.textContent = 'DELETE'

        div.append(text)
        todoList.append(div)

        buttonsDiv.append(editButton)
        buttonsDiv.append(deleteButton)
        div.append(buttonsDiv)

        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            let editText = prompt(`${text.innerHTML}`).trim()
            if (editText === ''){
                return false
            }else {
                text.innerHTML = editText
            }
        }
        let words = []
        words.push(`${input.value.split('').reverse().join('')}`)
        words.forEach((txt) => {

            text.innerText = txt
        })
    }
}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)