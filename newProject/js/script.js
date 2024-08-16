// session 9 online 28/7/2024

// document.querySelector('img').setAttribute('src','imgs/2.png')
// document.querySelector('img').src='imgs/2.png'

// let input = document.querySelector('input')
// let btn = document.querySelector('button')

// console.log(input.hasAttribute('required'))
// input.removeAttribute('required')

// btn.onclick=function(){
//     console.log(event.target) // ==btn
//     console.log(this) // ==btn
//     if(input.getAttribute('type')=='password'){
//         input.setAttribute('type','text')
//         btn.textContent='hide password'
//     }
//     else{
//         input.setAttribute('type','password')
//         btn.textContent='show password'
//     }
// }

////////////////////////////////////////////////////////////////////
// let btns = document.querySelectorAll('button')

// for(let btn of btns){
//     btn.onclick=function(){
//         console.log(event.target)
//     }
// }

// document.querySelector('p').style.color='green'
// document.querySelector('p').style.margin='40px'
// document.querySelector('p').style.backgroundColorolor='#ddd'


// document.querySelector('p').style.cssText='font-size:50px ; font-family:Georgia; color:red;'

// document.querySelector('p').className = 'custom space abc'
  
// document.querySelector('p').classList.add('custom')  // append
// document.querySelector('p').classList.add('space')  // append

for (let p of document.querySelectorAll('p')){
    p.classList.add('custom')
    p.classList.add('space')
}
// document.querySelector('p').classList.remove('space')
// document.querySelector('p').classList.toggle('space') // switch -> remove if exist , add if not exist toggle no querySelectorAll

// let secondParagraph = document.querySelector('p:nth-of-type(2)');

// let paragraphs = document.querySelectorAll('p');
// let secondParagraph = paragraphs[1];



////////////////////////////////////////////////////////////////////

let btns = document.querySelectorAll('button');
let imgs = document.querySelectorAll('img');

// for (let btn of btns) {
//     btn.onclick = function() {
//         for (let others of btns) {
//             others.classList.remove('btn');
//             others.classList.remove('btn-primary');
//         }
//         btn.classList.add('btn');
//         btn.classList.add('btn-primary');
//     }
// }

for (let btn of btns){
    btn.onclick = function (){
        // for(let button of btns){
        //     button.className = '';
        // }
        document.querySelector('.btn.btn-primary').className='';
        event.target.className = 'btn btn-primary';

        let type = event.target.getAttribute('name')
        let related_imgs = document.querySelectorAll('.row .'+type)
        let all_imgs = document.querySelectorAll('.row > div')
        for(let img of all_imgs){
            img.style.display = 'none'
        }
        for(let img of related_imgs){
            img.style.display = 'block'
        }
        
    }
}

///////////////////////////////////////////////////////