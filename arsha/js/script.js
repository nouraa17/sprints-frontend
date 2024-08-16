function isPrime(num){
    if (num <= 1){
        return false;
    }
    for(i=2 ; i < num ; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

var num = prompt('Enter a number, I will tell you if it is a prime or not');
while(isNaN(num)){
    num = prompt('Please enter a valid number.');
}
num = Number(num)
if(isPrime(num)){
    alert('It is a prime number')
}
else{
    alert('It is not a prime number')
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const dropdown = document.getElementById('dropdown')
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
        dropdown.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
        dropdown.classList.add('transparent');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.why-us .container .ques ul li');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const existingP = this.querySelector('p');
            if (existingP) {
                this.removeChild(existingP);
            } else {
                const p = document.createElement('p');
                p.textContent = 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.';
                this.appendChild(p);
            }
            const icon = this.querySelector('i');
                    icon.classList.toggle('ri-arrow-right-s-line');
                    icon.classList.toggle('ri-arrow-down-s-line');
        });
    });
});

