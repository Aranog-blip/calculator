let UserInput1S = prompt("Enter the first number");
console.log (UserInput1S);
console.log(typeof(UserInput1S));
let operate = prompt("What funtion to use? (add, sub, times, divide)")
console.log (operate);
let UserInput2S = prompt ("Enter the second number");
console.log (UserInput2S);
let UserInput1 = Number(UserInput1S);
let UserInput2 = Number(UserInput2S);
console.log(typeof(UserInput1));

function add () {
    let x = UserInput1 + UserInput2;
    console.log(x);

}
function sub () {
    let x = UserInput1 - UserInput2;
    alert(x);

}
function times () {
    let x = UserInput1 * UserInput2;
    alert(x);

}
function divide () {
    let x = UserInput1 / UserInput2;
    alert (x);

}
if (operate == "/"){
    divide ();
}
else if (operate == "*"){
    times();
}
else if (operate == "+"){
    add();
}
else if (operate == "-"){
    sub();
}