// // session 6 
// // fuctions
// alert('Welcome to our website')
// confirm('Are you frontend developer?')
// console.log('Page running correctly')
// prompt("What is your salary?","1000") /* message , default*/

////////////////////////////////////////////////////////////////
// // variables & types

// redeclaring or redefining no error 
// var first_name ="Nourhan";
// var last_name;
// console.log(first_name)
// first_name="Nada"
// console.log(first_name)
// console.log('first_name')
// console.log(last_name)

////////////////////////////////////////////////////////////////

// // redeclaring gives error 
// let first_name="Nourhan";
// console.log(first_name)
// ////////////////////////////////////////////////////////////////

// // redefining gives error 
// // must initialize 
// const last_name="Muhammad";
// console.log(last_name)

// ////////////////////////////////////////////////////////////////

// var salary = 10000;
// console.log("My current salary is : " + salary)

// console.log(isNaN(first_name))
// console.log(isNaN(salary))

// console.log(salary * 10)

// ////////////////////////////////////////////////////////////////

// let activation_status= true

// console.log(activation_status)
// ////////////////////////////////////////////////////////////////
// // array 
// let products=['mobile', 'laptop','tv'];
// products[3] = 'car' //search for append!!!!!!!!!!!

// console.log(products)
// console.log(products[0])
// console.log(products[1])
// console.log(products[4])
// console.log(products[products.length-1])
// console.log(products.length)

// ////////////////////////////////////////////////////////////////
// //object
// let user = {
//     firstname : "Nourhan",
//     lastname: "Muhammad",
//     salary:1000,
//     skills:[{
//         name:'php',
//         exp: 2
//     }]
// }
// console.log(user)
// console.log(user.firstname)
// console.log(user['firstname'])

// user.firstname ="Nada"
// console.log(user.firstname)
// console.log(user.skills[0].name)

// // use delete when deleting key
// // delete user.firstname
// //////////////////////////////////////////////////////////////////////
// // session 7
// //json object
// // [{},{},{}]
// let person={
//     username:'ali',
//     skills:[
//         {
//             name:'php',
//             projects:[
//                 {
//                     name:'hospital',
//                     time:4,
//                     team:['saad','mazen','mohamed'],
//                 },
//                 {
//                     name:'coffee',
//                     time:7,
//                     team:['saad','mazen','ahmed'],
//                 }
//             ]
//         }
//     ],
//     address:'cairo',

// };
// // print mohamed
// console.log(person.skills[0].projects[0].team[2])

// //////////////////////////////////////////////////////////////////////
// // pass by value
// let message = 'hello';
// let last = message; // last ='world'
// message='world';

// console.log(message); // world
// console.log(last); // hello

// // pass by reference
// let person1={
//     username:'ali',
//     address:'cairo'
// };

// let user1 = person1;
// person1.username='mazen';
// user1.address='alex';

// // same result
// console.log(person1); 
// console.log(user1); 

// // copying
// let user1 = Object.assign({},person1);

// //////////////////////////////////////////////////////////////////////
// // another way to define object & array

// let user2 = new Object(); // {}
// user2.username='Noura';
// user2.age='22';
// console.log(user2); 

// let person2 = new Array(); // []
// person2[0]='Noura';
// person2[1]='22';
// console.log(person2); 

// //////////////////////////////////////////////////////////////////////
// let salary1 = prompt('enter your salary')
// console.log(isNaN(salary1))
// console.log('My current annual salary ==> '+ salary1*12)

//////////////////////////////////////////////////////////////////////
// // if condition
// // <     >     <=     >=    !=     ==
// if(10 != 2){ //true
//     console.log('first action')
//     console.log('second action')
//     console.log('third action')
// }
// if(10 != 10){ //false
//     console.log('first action')
//     console.log('second action')
//     console.log('third action')
// }

// let salary = prompt('enter your salary')
// if(isNaN(salary)){
//     alert('Invalid input!')
// }
// else{
//     alert('Your annual salary ==> ' + salary*12)
// }

// let x = 10;
// let y = '10';
// if(x==y){ // value only
//     console.log('Valid value')
// }
// if(x===y){ // value and datatype
//     console.log('Valid value and datatype')
// }
 
// if(!(x>2)){
//     console.log('Valid')
// }
// else{
//     console.log('Invalid')
// }

// if (x==5){
//     console.log('value is five')
// }
// else if (x==8){
//     console.log('value is eight')
// }
// else if (x>8){
//     console.log('valid')
// }
// else {
//     console.log('error')
// }

//////////////////////////////////////////////////////////////////////

// let grade = prompt('Enter your grade');
// // decending order  
// if (grade >= 85){
//     console.log('Your grade is A')
// }
// else if (grade >= 75){
//     console.log('Your grade is B')
// }
// else if (grade >= 65){
//     console.log('Your grade is C')
// }
// else if (grade >= 50){
//     console.log('Your grade is D')
// }
// else{
//     console.log('Your grade is F')
// }

//////////////////////////////////////////////////////////////////////

// let x = 10;

// if(x>2){
//     if(x==20){
//         console.log('Valid')
//     }
//     else{
//         console.log('Invalid')
//     }
// }
// //////////////////////////////////////////////////////////////////////

// // &&     || 

// if(x>2 && x<5){
//     console.log('Yes and')
// }

// if(x>2 || x<5){
//     console.log('Yes or')
// }

// //////////////////////////////////////////////////////////////////////

// let grade = prompt('Enter your grade');

// // decending order  
// if (grade >= 85){
//     console.log('Your grade is A')
// }
// else if (grade >= 75 && grade < 85){
//     console.log('Your grade is B')
// }
// else if (grade >= 65 && grade < 75){
//     console.log('Your grade is C')
// }
// else if (grade >= 50 && grade < 65){
//     console.log('Your grade is D')
// }
// else{
//     console.log('Your grade is F')
// }

//////////////////////////////////////////////////////////////////////
// let x = 10;
// let y = (x>200)?5:0;
// console.log(y);

// let grade = prompt('Enter your grade');

// let new_grade= (grade >= 85) ? 'A' : (grade >= 75) ? 'B' : (grade >= 65) ? 'C' : (grade >= 50) ? 'D' : 'F' ;
// console.log(new_grade);

//////////////////////////////////////////////////////////////////////
// // switch
// let x= 60;

// // check on value
// switch(x){
//     case 10: 
//     console.log('res is 10'); 
//     break;
//     case 20: 
//     console.log('res is 20'); 
//     break;
//     case 30: 
//     console.log('res is 30'); 
//     break;
//     case 40: 
//     console.log('res is 40'); 
//     break;
//     default : 
//     console.log('invalid');
// }


// // check on condition
// switch(true){
//     case (x > 5 && x <8): 
//     console.log('res is 10'); 
//     break;
//     case (x == 20): 
//     console.log('res is 20'); 
//     break;
//     default : 
//     console.log('invalid');
// }

// let grade= 60;
// switch(true){
//     case (grade >= 85): 
//     console.log('A'); 
//     break;
//     case (grade >= 75): 
//     console.log('B'); 
//     break;
//     case (grade >= 65): 
//     console.log('C'); 
//     break;
//     case (grade >= 50): 
//     console.log('D'); 
//     break;
//     default : 
//     console.log('F');
// }

//////////////////////////////////////////////////////////////////////
// 5 types of loop

// 1 for
// let users =['ali','ahmed','mohamed','saad'] // length = 4  index 0 1 2 3

// for(let i =0 ; i < users.length ; i++){
//     console.log(users[i]);
// }

// for(let i =0 ; i < users.length ; i++){
//     if(i>=3){
//         console.log(users[i]); // last value in the array
//     }
// }

//////////////////////////////////////////////////////////////////////

// 2 for in

// for(let i in users){ // i= index
//     console.log(i);
//     console.log(users[i]);
// }

//////////////////////////////////////////////////////////////////////

// 3 for of

// for(let i of users){ // i= value
//     console.log(i);
// }

//////////////////////////////////////////////////////////////////////

// // 4 while
// let i =0;

// if(i < users.length){
//     console.log(users[i]);
//     i++;
// }
// console.log('rest of the code1');


// while(i < users.length){
//     console.log(users[i]);
//     i++;
// }
// console.log('rest of the code2');

// //////////////////////////////////////////////////////////////////////

// // 5 do while

// do{ // at least once
//     console.log(users[i]);
//     i++;
// }
// while(i < users.length)

//////////////////////////////////////////////////////////////////////

// let num = prompt('enter num of products')
// let products =[]

// // if(!(isNaN(num))){
// //     for(i=0; i< num;i++){
// //         products[i]= prompt('enter name of the product '+(i+1))
// //     }
// //     for(let i of products){
// //         console.log(i)   
// //     }
// // }
// // else{
// //     alert("Invalid num") 
// // }

// let sum=0;
// for(i=0; i< num;i++){
//     n=Number(prompt('enter price of the product '+(i+1)))
//     sum+=n;
// }
// console.log(sum)  

//////////////////////////////////////////////////////////////////////
// session 8 offline
// scoping 

// global

// let x ='ali'
// if (10>2){
//     x='mohamed'
//     console.log(x)
// }

// console.log(x)


// // local
// if (10>2){
//     let y ='ali'
//     y='mohamed'
//     console.log(y)
// }
// console.log(y)
//////////////////////////////////////////////////////////////////////
// let x ='test' //global var can be accesed anywhere

// function edit(){
//     x='test 1'
//     console.log(x)
// }
// console.log(x)
// edit()
// console.log(x)
//////////////////////////////////////////////////////////////////////
//functions

// function do_report(type='test',date='this day'){
//     console.log('start')
//     console.log(type+' report')
//     console.log('report date is '+date)
//     console.log('update')
//     console.log('end')
// }

// do_report('money','today')
// do_report('money')

//////////////////////////////////////////////////////////////////////
// function calc_product_price(x=0,y=0){
//     return x+y; // this is one value the return returns one value only
//     // return x,y; // will return y only
//     // return [x,y]; // this is object (one value) this is how we can return more then one value
// }

// let total = calc_product_price(50,50) + 60
// console.log(total)


// // or 
// let data = function calc_product_price(x=0,y=0){
//     return x+y; // this is one value the return returns one value only
//     // return x,y; // will return y only
//     // return [x,y]; // this is object (one value) this is how we can terurn more then one value
// }


// let result= data(100,200) // data is function now not variable

// console.log(result)

//////////////////////////////////////////////////////////////////////
// // fuction called once at the beginning of page it has no name
// (function(){
//     console.log('testttttttt')
// }())


// // arrow function => short for normal function
// let data = (x,y) => x+y;
// let result= data(100,200)
// console.log(result)

//////////////////////////////////////////////////////////////////////
// built in func in arrays

// let products=['one','two','three']

// products.push('four') //add at the end 
// products.unshift('five') //add at the start

// products.pop() //remove at the end 
// products.shift() //remove at the start

// // console.log(products)
// // console.log(products.toString())
// console.log(products.join('-'))


// // products.forEach(function(x,y){ // loops on value and index
// //     console.log(x) // values
// //     console.log(y) // index
// // })

// // let result = products.find(function(e){
// //     return e ==='two'; // match specific value
// // })

// let result = products.filter(function(e){
//     return e.indexOf('t') >= 0; // words contains t
// })

// console.log(result)


//////////////////////////////////////////////////////////////////////
// built in func in string

// let msg ='hello WORLD hello'
// let data ='resulte'
// console.log(data[0])
// console.log(msg.toLocaleLowerCase())
// console.log(msg.toLocaleUpperCase())
// console.log(msg.concat(data,' one ','two'))
// console.log(data.indexOf('e')) // 1
// console.log(data.lastIndexOf('e')) // 6
// console.log(data.indexOf('n')) // -1  -> not there 
// console.log(data.indexOf('re')) // 0
// console.log(data.indexOf('sul')) // 2
// console.log(data.search('re')) // 0
// console.log(data.charAt(0)) // r
// console.log(msg.replace('hello','today')) // replace first hello only
// console.log(msg.replaceAll('hello','today')) // replace all hello

//////////////////////////////////////////////////////////////////////
// built in func in number

// let x =55.145845
// console.log(x.toFixed()) //round
// console.log(x.toFixed(2)) // show 2 fraction nums

// console.log(Math.random()) //generate random number between 0 and 1 (decimal)
// console.log(Math.random() * 10) // to 10
// console.log((Math.random() * 10).toFixed())

// console.log(Math.floor()) // no floating 
// console.log(Math.ceil()) // add num
// console.log(Math.round()) // = toFixed()

//////////////////////////////////////////////////////////////////////

// email = prompt('Please enter your email:')
// while(email.search('@') == -1 || email.search('.com')== -1){
//    email= prompt('Please enter your correct mail:')
// }
// console.log(email)


//////////////////////////////////////////////////////////////////////
