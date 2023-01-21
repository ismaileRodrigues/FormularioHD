let nome = document.querySelector('#nome')
let Km = document.querySelector('#km').value
let Kmfim= document.querySelector('#kmfim').value
let hrSaida = document.querySelector('#hrSaida').value
let hrChegada = document.querySelector('#hrChegada').value
let textarea = document.querySelector('#textA')
let res = document.querySelector('#res')
let total = document.querySelector('#total')
let btn = document.querySelector('#btn')
//let km=8
//let kmfim=8
btn.addEventListener('click',(e)=>{
 // e.preventDefault()
let somakm = [km.value,kmfim.value]
let kmRodado=somakm.map(Number).reduce((a,b)=>b-a)

console.log(kmRodado)
  total.innerHTML= ` ${kmRodado} quilômetros rodado.
   `
})