// let nameRegard = prompt('Enter your name: ')
// let person = document.querySelector('#regarding')
// person.innerHTML=`<h1>Hey ${nameRegard}!</h1><br>You can find solutions of the tasks "JS-7-Objects" here`

// ------task23-------

// TASK 23.1

// let User = {
//     name: 'Muzaffar',
//     age: 26,
//     study: {
//         univerty: true
//     },
//     mandatoryArmyService: {
//         done: false,
//         proper: true,
//         willService: true
//     },
//     married: false
// }

// let User2 = { ...User }
// let User3 = Object.assign({},User)
// let User4 = {}

// for(let key in User){
//     User4[key]=User[key]
// }

// console.log(User)
// console.log(User2.married)
// console.log(User3)
// console.log(User4)

// TASK 23.2

// delete User3.study
// console.log(User3)

// console.log(User3.study)


// TASK 23.3


// function objectProperyCount(object){
//     let flag = 0
//     for(let i in object){
//         flag+=1
//     }
//     console.log('Property coun is: '+flag)
// }

// objectProperyCount(User3)

// -----JAVASCRIPT-7 OPTINAL TASKS------

// -----Exercise (1)-----

// let obj1 = {}
// obj1.name = 'Laptop'
// obj1.price = 1200
// obj1.price = 1000
// console.log(obj1.name,obj1.price)
// delete obj1.name
// console.log(obj1.name) // undefined

// -----Exercise (2)-----

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
// }

// let sum = 0 
// for(let i in salaries){
//     sum+=salaries[i]
        
// }
// console.log(sum)


// -----Exercise (3)-----

// let calculator = {
//     read: function(){
//         let value1=prompt('')
//         return value1
        
//     },
//     read2: function(){
//         let value2 = prompt('')
//         return value2
//     },
//     sum: function(a,b){
//         return a+b
//     },
//     mull: function(a,b){
//         return a*b
//     }
// }
// // calculator.read()
// // calculator.read2()
// alert(calculator.sum(calculator.read(),calculator.read2()));
// alert(calculator.mull(calculator.read(),calculator.read2()));
