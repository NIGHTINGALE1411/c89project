player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
 
player1score=0
player2score=0

document.getElementById("player1name").innerHTML=player1name+":"
document.getElementById("player2name").innerHTML=player2name+":"
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playerquestion").innerHTML="question turn-"+ player1name
document.getElementById("playeranswer").innerHTML="answer turn-"+ player2name
function Send(){
  number1=document.getElementById("no1").value;
  number2=document.getElementById("no2").value;  
  actualanswer=parseInt(number1)*parseInt(number2)
  questionword="<h4>"+number1+"X"+number2+"</h4>"
    inputbox="<br> Answer: <input type='text' id='inputcheckbox'>"
    checkbutton="<br> <br> <button class='btn btn-info' onclick='check()'> CHECK</button>"
    row=questionword+inputbox+checkbutton
    document.getElementById("output").innerHTML=row
    document.getElementById("no1").value=""
    document.getElementById("no2").value=""
}
questionturn="player1"
answerturn="player2"
 function check(){
     getanswer=document.getElementById("inputcheckbox").value
     answer=getanswer.toLowerCase()
     console.log(answer)
     if (answer==actualanswer){
         if (answerturn=="player1")
         {
             player1score=player1score+1
             document.getElementById("player1score").innerHTML=player1score
         }
         if (answerturn=="player2")
         {
             player2score=player2score+1
             document.getElementById("player2score").innerHTML=player2score
         }}
         if (questionturn=="player1"){
          questionturn="player2"
          document.getElementById("playerquestion").innerHTML="question turn-"+player2name
      
      }
      else{
          questionturn="player1"
          document.getElementById("playerquestion").innerHTML="question turn-"+player1name
      }
      if (answerturn=="player1"){
          answerturn="player2"
          document.getElementById("playeranswer").innerHTML="answer turn-"+player2name
      
      }
      else{
          answerturn="player1"
          document.getElementById("playeranswer").innerHTML="answer turn-"+player1name
      }
      document.getElementById("output").innerHTML=""
 }