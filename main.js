
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
var y= 0
console.log(y)
console.log(typeof(y))

function Operation(){
      var x = document.getElementById('display').textContent * 1
      console.log(x)
      if (y === 0){
        y = x
        document.getElementById('display').textContent = ""
      }
      else {
        var z = x + y
        document.getElementById('display').textContent = z
        y = 0
      }
      
      
}
document.getElementById('operation').addEventListener('click', Operation)