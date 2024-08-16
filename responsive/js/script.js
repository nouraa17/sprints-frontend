let colors = document.querySelectorAll('.colors ul li')
for(let color of colors){
    color.onclick = function(){
        let color_type = event.target.getAttribute('name')

        document.querySelector('head link:last-of-type').setAttribute('href','css/'+color_type+'.css')
    }
}


//////////////////////////////////////////////////////////////////////////

let inputs =document.querySelectorAll('form div > input')

//////////////////////////////////////////////////////////////////////////
// handle form submit
document.user_data.onsubmit = function(){
    for(let input of inputs){
        if(input.value.length <= 3){
            event.preventDefault()
            alert('input must be more than 3 chars')
            break;
        }

    }
}

//////////////////////////////////////////////////////////////////////////
// handle form inputs after compelete writing

for(let input of inputs){
    input.onblur=function(){ // blur means focusing on the input I am still writing in it
        if(this.value.length<3){
            this.nextElementSibling.textContent = this.name +' should be at least 3 chars'
            this.nextElementSibling.style.display='block'
        }
        else{
            this.nextElementSibling.textContent = ''
            this.nextElementSibling.style.display='none'
        }
    }
}


window.onscroll = function(){
    if(window.scrollY > 600){
        document.querySelector('.btn_top').style.opacity = 1
    }
    else{
        document.querySelector('.btn_top').style.opacity = 0
    }
}

document.querySelector('.btn_top').onclick = function(){
    window.scrollTo({top:0})
}
