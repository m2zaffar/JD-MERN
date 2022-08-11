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