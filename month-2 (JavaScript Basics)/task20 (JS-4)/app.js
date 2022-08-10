// Task1. Ureyimde bir reqem tutmusam 0-dan 50ye qeder. User her defesinde hemin ededi sorusun. Eger sehvdirse, yeniden sorussun. Duz olanda, kapital bank hesabinda 1000 manat kocurulsun console-a cixarin. 
// *ADVANCED*: nece defeye tapdi, onu da cixarin. Tutaq ki,  ehsen, 10 defeye tapdin. 
// *ADVANCED ADVANCED* : 
//  eger addimin sayi 1 olanda olsun 1000 manat
//  eger addimlarin sayi 2,3,4,5 olarsa  olsun 750 manat
//  eger addimlarin sayi 6,7,8,9 olarsa  olsun 250 manat
//  eger addimlarin sayi 10+ olarsa  olsun -250 manat  (ozu bize pul versin)
// -------------------------------------------------------------------------------------------------------------------

// TASK2. 1-den verilen edede qeder olan ededlerin cemi. 

// -------------------------------------------------------------------------------------------------------------------
// TASK3. ekranda bu formada sekil cekin
// *
// ****
// ***
// **
// *
 //task 1

let myNumber = 45;

for(let i=0; i>=0; i++){
    let randomNumber = prompt('Enter Random number to find My number between 0-50');
    step=i+1;
    if (myNumber === Number(randomNumber)){
        if(step==1){
            console.log('Kapital Bank hesabına 1000 AZN köçürülsün')

        }else if (2<=step && step<=5){
            console.log('Kapital Bank hesabına 750 AZN köçürülsün')

        }else if (6<=step && step<=9){
            console.log('Kapital Bank hesabına 250 AZN köçürülsün')

        }else if (step>=10){
            console.log('Kapital Bank hesabına 250 AZN qebul edildi')

        }
        console.log('Ehsen,'+step+'-cide tapdin')
        break
    }

};


// task 2:


let givenNumber = 55;
let result = 0;
for(let i=0; i<=55; i++){
    result+=i
};
console.log('Task 2-result is:'+ result);


// task 3


document.write('* <br>')
document.write('**** <br>')
document.write('*** <br>')
document.write('** <br>')
document.write('* <br>')
document.write('---------------------------------------------------<br>')




/* _________OPTINAL_________PRESENTATION_________TASKS____________


Exercise (1)

→ Ask the user to enter a number
→ If the user provides a non-numeric value (such as “abc”), display an error message
and ask the user to try again
→ Hint: use the function isNaN() to check if the conversion to number failed

Exercise (2)

→ Get a number from the user and print the sum of its digits
→ For example, if the user enters the number 57103, then your script should print 16
(5+7+1+0+3)

Exercise (3)

→ Get from the user two numbers: min and max
→ Output all the even numbers between min and max (note that min and max
→ themselves might be odd numbers)
→ For example, if the user enters min = 5 and max = 14, you should print the numbers
6,8,10,12,14


Exercise (4)
→ Get from the user a number
→ Print to the console a square of stars whose length is the number specified by the user

 SOLUTIONS BELOW */



// Exercise (1)

do{
    var number = prompt('ENTER THE NUMBER:')
}while(isNaN(number)){}



// Exercise (2)

let number = Number(prompt('Enter the number:'))
let saygac = 0
while(number>0){
    saygac=saygac+number%10
    number=number/10
    number=parseInt(number)

}
alert('sum of the digits = '+saygac)


// Exercise (3)

let minNumber = Number(prompt('Enter min number:'))
let maxdNumber = Number(prompt('Enter max number:'))

for(let i = minNumber; i<=maxdNumber; i++){
    if (i%2==0){
        console.log(i)
    }
}

// Exercise (4)

let star = Number(prompt('enter the number of square stars:'))
document.write('<br>This is the solution of exercise 4 from optinal tasks at presentation<br><br>')
for(let j=0;j<=star;j++){
    for(let i = 0; i<=star;i++){
        document.write('*')
    }
    document.write('<br>')

}