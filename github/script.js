// axios.get('https://jsonplaceholder.typicode.com/todos').then(function (e) {
//     console.log(e.data)
// })

// axios.get('https://jsonplaceholder.typicode.com/todos').then((e) : void =>{
//     console. log(e.data);

axios.get('https://jsonplaceholder.typicode.com/todos').then(function (e)  {
    for(let i = 0; i < e.data.length; i++){
    let item = e.data[i];
    let p  = document.createElement('p');
    p.innerHTML = item.title;
    document.querySelector ('.data .container').append(p)
    }
})