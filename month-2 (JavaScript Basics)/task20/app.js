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


// for(let i=4; i>=0; i--){
//     document.write('*'*4)
// }  Why not ?? crazy JS :(




