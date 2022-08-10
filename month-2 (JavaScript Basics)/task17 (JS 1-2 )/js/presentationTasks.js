
let admin;
let name1 = 'John'
admin = name1;
alert('admin name is:'+admin)

let name2 = "Dan";
alert(`hello ${name2 + 1}`); // hello Dan1 
alert(`hello ${"name"}`); // hello name
alert("hello ${name}"); // hello ${name}
alert('hello ${"name"}'); // hello ${"name"}


let a = "" + 1 + 0
alert(a) //10


let b = "" - 1 + 0
alert(b) // -1


let c = true + false
alert(c) // 1

let d = 6 / "3"
alert(d) // 2

let e = "2" * "3"
alert(e) // 6


let f = 4 + 5 + "px"
alert(f) //9px

let g ="$" + 4 + 5
alert(g) //$45

let h ='4' - 2
alert(h) // 2

let x = "4px" - 2
alert(x) //NaN

let i = 7 / 0
alert(i) //Infinity

// let J = '-9 ' + 5  " typo
// let k = -9 " - 5 typo

let J = null + 1
alert(J) // 1

let k = undefined + 1
alert(k) //NaN