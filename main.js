function MUAHAHA(){
  window.location="moneyy.html";
     }
function send(){
  var num1=document.getElementById("number_input_1").value;
  var num2=document.getElementById("number_input_2").value;
  number="<h4>This Guess This Equation That: "+"null"+" Has Wrote! "+"</h4>";
  nunu="<h4> The Equation Is: "+num1+" x "+num2+" </h4>"
  answer="<br> Type The Answer Here: <input type='text' placeholder='Type Your Answer Here'>";
  button_check="<br><br><button class='btn btn-success' onlick='check_the_answer()'>Check Your Answer</button>";
  var the_diver=number+nunu+answer+button_check;
  document.getElementById("output").innerHTML=the_diver
     }