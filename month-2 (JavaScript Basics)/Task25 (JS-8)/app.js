// ------------------------------------TASK 25 -STRINGS-DATE-TIME-----------------------

// Task25.1

// function repeatedSymbolCounter(getWord, repeatedSymbol){
//     getWord = prompt('Enter the word: ')
//     let word = getWord.split('')
//     repeatedSymbol=prompt('Enter the symbol:')
//     let counter= 0
//     for(let i=0; i<=word.length;i++){
//         if(repeatedSymbol==word[i]){
//             counter+=1
//         }
//     }
//     alert(counter)
//     return counter

// }
// repeatedSymbolCounter('ALIONALI', 'A')


// Task25.2

// let capitalize = 'alion'
// capitalize = capitalize.replace('a','A')
// console.log(capitalize)



// Task25.3.1

// function mySplit(sentences){
//     let result =sentences.split(' ')
//     console.log(result)

// }

// mySplit('do not split my heart')


// Task25.3.2

// function myAbreviatedForm(sentences){
//     let result =sentences.split(' ')
//     let firstWord = result[0]                         // I hope this is not spagetti. it is 02:19 and i'm sleepy
//     let secondWord = result[1].charAt(0)
//     console.log(`${firstWord} ${secondWord}`)

// }

// myAbreviatedForm('Alion GreenHeart')    



// Task25.3.3


// function removeCharacterFromString(word,removeSymbol){
//     word = word.replaceAll(removeSymbol,'')
//     console.log(word)

// }

// removeCharacterFromString("Alion","A")


// Task25.3.4

// let mail = prompt('enter your mail: ')
// let checkedMail = mail.split('@')


// if(mail.endsWith('@gmail.com')&&checkedMail[0].length>=5){
//     alert('Thats it!')
// }else{
//     alert('oops, something wrong')
// }

// Task25.4.1

// let today = new Date()
// today = today.getDay()

// function checkLessonDay(){
//     switch(today){
//         case 6:
//         case 7:
//             alert('Stay home and chill')
//             break
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             alert('Go to the lesson')
//             break
//     }

// }
// checkLessonDay()

// Task25.4.2

// let today = new Date()
// document.write(`Today is ----------->>>>       ${today}`)


// TASK 25.4.3

// let today = new Date()
// let today1 = today.getDay()
// let today2 = today.toString().split(' ')
// today2=today2[0]

// document.write(`Today is ${today1}-day, I mean It's ${today2}`)

// TASK 25.4.4

// let month = new Date()
// let month1 = month.getMonth()+1
// let month2 = month.toString().split(' ')
// month2 = month2[1]
// document.write(`it is ${month1} month I mean ${month2} `)

// TASK 25.4.5

// let userAge = Number(prompt('Enter your age: '))
// let maximumAge = 77
// alert(`After ${77-userAge} years you will die!`)

// TASK 25.4.6 --- ? unsolved

// let userAge = prompt('Enter your birthday:')
// let now = new Date()


// alert(`it hass been:
// ${today.getFullYear()-userAge}-years,
// ${date.}-months,
// ${date.getDay}-days,
// ${date.getHours}-hours,
// ${date.getMinutes}-minutes,
// ${date.getSeconds()}-seconds,
// ${date.getMilliseconds()}-milliseconds
// that you are living. Go to thanks God`)



// -----------------------JS-8 OPTIONAL TASKS------------------------

// Exercise (1)
// function checkSpam(str){
//       if(str.includes('fanta')||str.includes('cola')){
//         return true
//       }return false
// }
// alert(checkSpam('buy cola now')); // true
// alert(checkSpam('free fanta ')); // true
// alert(checkSpam("innocent rabbit")); // false


// Exercise (2)

// function truncate(str, maxlength){
//     if(str.length>maxlength){
//         str=str.slice(0,maxlength)
//         str= str.concat('...')
//         return str
//     }else{
//         return str
//     }
// }
// alert(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"
// alert(truncate("Hi everyone!", 20)); // "Hi everyone!"


// Exercise (3)

// function getSecondsToTomorrow() {
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//     let totalSecondsInADay = 86400;
  
//     return totalSecondsInADay - totalSecondsToday;
//   }