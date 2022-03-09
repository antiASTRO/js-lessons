let h1 = document.querySelector('#text')
let plus = document.querySelector('#btn1')
let minus = document.querySelector('#btn2')
let nol = document.querySelector('#btn3')

// btn.onclick = (event) => {
//   console.log('Bosdim Karoc');
// }

// btn.onclick = (event) => {
//   h1.innerText = 'RUS'
// }

// btn2.onclick = (event) => {
//   h1.innerText = 'USA'
// }

let c = 0 
  
plus.onclick = (event) => {
  c = c + 1  
  h1.innerText = c
}

minus.onclick = (event) => {
  c = c - 1  
  h1.innerText = c
}

nol.onclick = (event) => {
  c = 0  
  h1.innerText = c
}