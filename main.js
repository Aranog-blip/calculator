
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
  function Dot(){
    document.getElementById('display').innerHTML += ".";
  }

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
var y= 0;
var x = 0;
document.getElementById('operation+').addEventListener('click', OperationPlus);
document.getElementById('operation-').addEventListener('click', OperationMinus);
document.getElementById('operation*').addEventListener('click', OperationTimes);
document.getElementById('operation/').addEventListener('click', OperationDivide);
document.getElementById('operation=').addEventListener('click', OperationEqual);
document.getElementById('operationC').addEventListener('click', OperationC);
document.getElementById('dot').addEventListener('click', Dot)

function OperationPlus () {
  document.getElementById('displayOperation').textContent = "+";
  x = document.getElementById('display').textContent * 1;
  document.getElementById('display').textContent = '';
}
function OperationMinus () {
  document.getElementById('displayOperation').textContent = "-";
  x = document.getElementById('display').textContent * 1;
  document.getElementById('display').textContent = '';
}
function OperationTimes () {
  document.getElementById('displayOperation').textContent = "*";
  x = document.getElementById('display').textContent * 1;
  document.getElementById('display').textContent = '';
}
function OperationDivide () {
  document.getElementById('displayOperation').textContent = "/";
  x = document.getElementById('display').textContent * 1;
  document.getElementById('display').textContent = '';
}

function OperationEqual () {
  y = document.getElementById('display').textContent * 1;
  if (document.getElementById('displayOperation').textContent == '+') {
    var z = x + y;
    document.getElementById('display').textContent = z;
  }
  else if (document.getElementById('displayOperation').textContent =='-') {
    var z = x - y;
    document.getElementById('display').textContent = z;   
  }
  else if (document.getElementById('displayOperation').textContent == '*') {
    var z = x * y;
    document.getElementById('display').textContent = z;   
  }
  else if (document.getElementById('displayOperation').textContent == '/') {
    var z = x / y;
    document.getElementById('display').textContent = z;   
  }
  else {
    document.getElementById('display').textContent = 'ERROR!'; 
  }
}
function OperationC () {
  document.getElementById('display').textContent = '';
  document.getElementById('displayOperation').textContent = '';
  x = 0;
  y = 0;
  z = 0;
}