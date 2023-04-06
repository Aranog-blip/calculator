
function One(){
    document.getElementById('display').innerHTML += 1 ;
  };
  function Two(){
    document.getElementById("display").innerHTML += 2;
  };
  function Three (){
    document.getElementById("display").innerHTML += 3;
  };
  function Four(){
    document.getElementById("display").innerHTML += 4;
  };
  function Five(){
    document.getElementById("display").innerHTML += 5;
  };
  function Six(){
    document.getElementById("display").innerHTML += 6;
  };
  function Seven(){
    document.getElementById("display").innerHTML += 7;
  };
  function Eight(){
    document.getElementById("display").innerHTML +=8;
  };
  function Nine(){
    document.getElementById("display").innerHTML += 9;
  };
  function Zero(){
    document.getElementById("display").innerHTML += 0;
  };

document.getElementById("one").addEventListener("click", One);
document.getElementById("two").addEventListener("click", Two);
document.getElementById("three").addEventListener("click", Three);
document.getElementById("four").addEventListener("click", Four);
document.getElementById("five").addEventListener("click", Five);
document.getElementById("six").addEventListener("click", Six);
document.getElementById("seven").addEventListener("click", Seven);
document.getElementById("eight").addEventListener("click", Eight);
document.getElementById("nine").addEventListener("click", Nine);
document.getElementById("zero").addEventListener("click", Zero);

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



//if (operate == "/"){
  //  divide ();
//}
//else if (operate == "*"){
//    times();
//}
//else if (operate == "+"){
  //  add();
//}
//else if (operate == "-"){
  //  sub();
//}