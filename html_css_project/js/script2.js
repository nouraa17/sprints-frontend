// session 8
let p =document.getElementById('one')

let h2 =document.getElementsByTagName('h2')

let red = document.getElementsByClassName('red')

let inputs = document.getElementsByName("skill") // names

let data1 = document.querySelector("div p span") // first match

let data2 = document.querySelectorAll("div p span")

console.log(p) // one value
console.log(h2) //array
console.log(red) //array
console.log(inputs) //array
console.log(data1) //one value
console.log(data2) //array

//////////////////////////////////////////////////////////////////////

// document.querySelector('p').innerHTML='js content'
// document.querySelector('p').innerHTML='<span>js content</span>'
document.querySelector('p').textContent='<span>js content</span>'

console.log(document.querySelector('p').innerHTML)
/////////////////////////////////////////////////////////////////////////////

// task

// ask user to enter number and tell him it is prime or not

// html css -> arsha till services 