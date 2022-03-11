// let users = document.querySelector('#users')
// let name  = document.querySelector('#name')
// let btn   = document.querySelector('#btn')

// btn.onclick = (event) => { 
//   let a = "Xush kelibsiz!"
//   let n = name.value 
//   users.innerText = a + n
// }

let message = document.querySelector('#message')
let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let age = document.querySelector('#age')
let btn = document.querySelector('.btn.btn-primary')

btn.onclick = (event) => {
  let a = ' Hurmatli '
  let b = ' siz '
  let c = 'yildan keyin 30 ga to`lasiz!'
  let d = name.value  + ' ' + surname.value + ','
  let e = 30 - age.value + ' '

  message.innerText = a  +  d  +  b  +  e  +  c
}