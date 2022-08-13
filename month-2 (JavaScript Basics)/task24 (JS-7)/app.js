let askForLogin = confirm("Do you want to login?");

let myMail = "harras";
let mypassword = "1234";

class User {
  createUser(mail, password) {
    this.mail = mail;
    this.password = password;
  }
}

let me = new User();
me.createUser(myMail, mypassword);

if (askForLogin) {
  let mail = prompt("Enter mail: (hint: harras)");
  if (me.mail === mail) {
    let password = prompt("Enter the password: (hint: 1234)");
    if (password === me.password) {
      alert("OLA!!!!");
    } else {
      alert("oops, password is incorrect!");
    }
  } else {
    alert("oops, mail is incorrect!");
  }
} else {
  alert("Well, I will offer you register");
}

let askForRegister = confirm("Do you want to register?");

if (askForRegister) {
  let mailRegister = prompt("Enter mail for registration:");
  let passwordRegister = prompt("Enter the password for registration:");
  let users = new User();
  users.createUser(mailRegister, passwordRegister);
  alert("Congrats! You registered! I will show your credits at console");
  console.log(
    "Your mail is:" + users.mail + "  " + "Your password is:" + users.password
  );
} else {
  alert("You will never find register page as I have!");
}
