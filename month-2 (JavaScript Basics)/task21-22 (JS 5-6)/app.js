
// ------------------------Task 21.1---------------------------------------


// function getNumberOne(){
//     let firstNUmber  = Number(prompt('Enter the first number: '))
//     let secondNumber = Number(prompt('Enter the second number: '))
//     return firstNUmber**secondNumber 
// }

// function show(){
//     document.write( `The task 21.1 result is: ${getNumberOne()}`)
// }

// show()


//---------------------------TASK 21.2-------------------------------------------

// solution-1
// function add(a,b,fucnCallBack){
//     if (fucnCallBack=='console.log'){
//         console.log(a+b)
//     }else if(fucnCallBack=='alert'){
//         alert(a+b)
//     }
// }

// add(3,5,'console.log') 
// add(3,5,'alert') 



// solution-2
// function add(a,b,callback){
//     if (callback==alrt){
//         alert(a+b)
//     } else if (callback==consoleLog){
//         console.log(a+b)
//     } 
// }

// function alrt(){
//     return 'alert'
// }

// function consoleLog(){
//     return 'console.log'
// }

// add(3,5,consoleLog)
// add(3,5,alrt)



//--------------------------TASK 22 ------------------------------------

// let checkAge = (age,granted,denied) => {
//     age < 18 ? denied(): granted();
// };


// let age = prompt('What is your age?')

//  let grantAccess =() => {
//     alert('Access granted');
// }

// let denyAccess = () => {
//     alert('Access denied')
// }

// checkAge(age, grantAccess, denyAccess);

// -----------------OPTINAL PRESENTATION TASKS--------------------

// Exercise (1)


// function getNumbers(callback){
//     let x=Number(prompt('first number'))
//     let n=Number(prompt('second number'))
//     callback(x,n)
// }

// function pow(x,n){
//     if(n>=1){
//         alert(x**n)
//     }
// }

// getNumbers(pow)

// Exercise (2)

// let n = Number(prompt('Enter the number: '))
// let flag=0
// for(let i=2; i<=n; i++){
//     if(n%i==0){
//         flag+=1
//     }
// }


// function isPrime(n){
//     if (flag>2){
//         console.log(false)
//         return flase
        
//     }else{
//         console.log(true)
//         return true
//     }
// }
    
// function showPrime(n){
//     for(let i=0; i<=n; i++){
//         if(i%2==1){
//             console.log(i)
//         }
//     }

    
// }
// isPrime(n)
// showPrime(n)



