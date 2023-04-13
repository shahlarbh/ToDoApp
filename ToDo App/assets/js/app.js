let input = document.querySelector('#input')
let button = document.querySelector('#button')
let tasks = document.querySelector('#tasks')
let taskcount = document.querySelector('#taskcount')
let alert = document.querySelector('.alert')

button.onclick = () => {
    let inputvalue = input.value
    let div = document.createElement('div')
    let p = document.createElement('p')
    let btn = document.createElement('button')

    p.innerHTML = inputvalue
    btn.innerHTML = 'Delete'
    btn.className = 'btn btn-danger'
    div.className = 'box d-flex justify-content-between'

    div.append(p,btn)
    tasks.append(div)

    btn.onclick = () => {
        div.remove()
        Result()
    }

    Result()
}

function Result() {
    let count = document.querySelectorAll('.box').length

    if(count > 0) {
        alert.classList.add('d-none')
        taskcount.innerHTML = `Task count: ${count}`
    }

    else{
        alert.classList.add('block')
        taskcount.style.display = 'none'
    }
}