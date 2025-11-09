var swordScore=0;
var spellScore=0;
var questionCount=0;



var button = document.getElementById("restart");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var result = document.getElementById("result");

q1a1.addEventListener("click", sword);
q1a2.addEventListener("click", spell);

q2a1.addEventListener("click", sword);
q2a2.addEventListener("click", spell);

q3a1.addEventListener("click", sword);
q3a2.addEventListener("click", spell);

button.addEventListener("click", restart);

function restart() {
  result.innerHTML = "Your are a...";
  console.log("You are a...");
  swordScore = 0;
  spellScore = 0;
  questionCount = 0;
}



function sword() {
  swordScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" swordScore = "+ swordScore);
  updateResult();
}
function spell() {
  spellScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" spellScore = "+ spellScore);
  updateResult();
}
function updateResult() {
  if (questionCount ==3) {
    result.innerHTML = "You are a spell user";
    console.log("The quiz is done!");
      if(spellScore>=2){
        console.log("You are a spell user!");
        } 
      else if(swordScore >= 2){
        result.innerHTML = "You are a sword user";
        console.log("You are a sword user!");
        }
  }
}