let small_imgs= document.querySelectorAll('body > div > div.second > img')

for (let small_img of small_imgs){
    small_img.onclick = function (){
        let small = small_img.getAttribute('src')
        let hero = document.querySelector('body > div > div.first > img');
        hero.setAttribute('src',small)
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////
let input = document.querySelector('input')
let btn = document.querySelector('button')

btn.onclick = function (){
    // console.log(input.value)
    if (input.value === ''){
        alert('enter valid value')
    }
    else{
        let skill = input.value;
        let li = document.createElement('li');
        li.textContent = skill
        li.className='one two three skill_name'
        document.querySelector('ul').append(li) // add at the end 
        // document.querySelector('ul').prepend(li) // add at the beginning 
        input.value=''
    }

}
//////////////////////////////////////////////////////////////////////////////////////////////
// document.querySelector('p').onclick = function (){
//     event.target.remove()
// }
// //////////////////////////////////////////////////////////////////////////////////////////////

// document.onclick=function(){ // this is to access elements created by js cause query selector will not work
//     console.log(event.target)
//     console.log(event.target.tagName)
//     if(event.target.className.indexOf('skill_name')>=0){
//         if(confirm('Are you sure you want to delete?')){
//             event.target.remove()
//         }
//     }
// }

// //////////////////////////////////////////////////////////////////////////////////////////////
// let date = new Date();

// console.log(date.getFullYear())
// console.log(date.getMonth() +1)
// console.log(date.getDay()) // week days sun =0 mon=1 ..etc
// console.log(date.getDate()) //month day
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString())


// setInterval(function(){ // will be repeated every 1 second
//     let date = new Date();
//     document.querySelector('p').innerHTML = date.toLocaleTimeString()
// },1000) //1000 milliseconds =1 second

// setTimeout(function(){ // will be executed one time after 5 seconds
//     console.log('test')
//  },5000)
//  //////////////////////////////////////////////////////////////////////////////////////////////

//  let error = document.querySelector('p.error')
//  input.onkeyup=function(){
//     if(event.target.value.length < 4){
//         error.textContent =' input is less than 4 chars'
//         error.className='alert alert-danger'
//     }
//     else{
//         error.textContent =''
//         error.className=''
//     }
//  }

//  document.querySelector('.error').nextElementSibling
//  document.querySelector('.error').nextElementSibling.nextElementSibling
//  document.querySelector('.error').nextSibling
//  document.querySelector('.error').previousElementSibling

//////////////////////////////////////////////////////////////////////////////////////////////

let f_input = document.querySelectorAll('body > div > form > div input');
console.log(f_input);
let p = document.querySelectorAll('body > div > form > div p');

for (let input of f_input) {
    input.onkeyup = function() {
        let input_name = input.getAttribute('name');
        console.log(input_name);

        let related_alert = input.nextElementSibling;

        if (event.target.value.length < 4) {
            related_alert.textContent = input_name + ' must be more than 4 chars';
            related_alert.className = 'alert alert-danger';
        } else {
            related_alert.textContent = '';
            related_alert.className = '';
        }
    }
}

//////////////////////////////////////
// task
// chart .js  search 
// nice admin bootstrapmade
// arrow top page