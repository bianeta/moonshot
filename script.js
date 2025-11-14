var thesunScore=0;
var venusScore=0;
var earthScore=0;
var marsScore=0;
var jupiterScore=0;
var saturnScore=0;
var uranusScore=0;
var neptuneScore=0;
var murcuryScore=0;
var dwarfScore=0;



var button = document.getElementById("restart");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");


var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

var result = document.getElementById("result");

q1a1.addEventListener("click", neptune);
q1a1 .addEventListener("click", dwarf);
q1a1.addEventListener("click", uranus);


q1a2.addEventListener("click", jupiter);
q1a2.addEventListener("click", saturn);
q1a2.addEventListener("click", thesun);


q1a3.addEventListener("click", earth);
q1a3.addEventListener("click", mars);
q1a3.addEventListener("click", venus);
q1a3.addEventListener("click", murcury);






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