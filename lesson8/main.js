// const body = document.querySelector('body')

// const btn = document.createElement('button')

// btn.innerText = 'Shoxrux'

// btn.className = 'btn btn-primary'

// const input = document.createElement('input')

// input.setAttribute('placeholder', 'Bir narsa')

// input.className = 'form-control'

// const container = document.createElement('div')
// container.className = 'container-sm gap-3 p-4 d-flex flex-column justify-content-center align-items-center'

// container.appendChild(input)
// container.appendChild(btn)

// body.appendChild(container)

const body = document.querySelector('body')

const container = document.createElement('div')
container.className = 'container-sm p-4 d-flex flex-column gap-3'

const h3 = document.createElement('h3')
h3.innerText = 'Tasks'

const div = document.createElement('div')
div.className = 'd-flex gap-3'

const input = document.createElement('input')
input.className = 'form-control'

const btn = document.createElement('button')
btn.className = 'btn btn-primary'
btn.innerText = 'Create Task'

const ul = document.createElement('ul')
ul.setAttribute('id', 'task-list')
ul.className = 'list-group'



// const li = document.createElement('li')
// li.className = 'list-group-item'
// li.innerText = 'Cras justo odio'
// const li2 = document.createElement('li')
// li2.className = 'list-group-item'
// li2.innerText = 'Dapibus ac facilisis in'
// const li3 = document.createElement('li')
// li3.className = 'list-group-item'
// li3.innerText = 'Morbi leo risus'
// const li4 = document.createElement('li')
// li4.className = 'list-group-item'
// li4.innerText = 'Porta ac consectur ac'


div.appendChild(input)
div.appendChild(btn)

// ul.appendChild(li)
// ul.appendChild(li2)
// ul.appendChild(li3)
// ul.appendChild(li4)

container.appendChild(h3)
container.appendChild(div)
container.appendChild(ul)

body.appendChild(container)

btn.onclick = (event) => {
    alert('Salom Uka!')
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerText = 'Cras justo odio'
    ul.appendChild(li)
  

    li.onclick = (event) => {

    }
    const btn_danger = document.createElement('button')
    btn_danger.className = 'btn btn-danger'
    btn_danger.innerText = 'Create Tesk'
    li.appendChild(btn_danger)
  
    btn_danger.onclick = (event) => {
        li.remove()
    }
    
}