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
var questionCount=0;



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







q2a1.addEventListener("click", thesun);
q2a1.addEventListener("click", mars);
q2a1.addEventListener("click", venus);

q2a2.addEventListener("click", dwarf);
q2a2.addEventListener("click", uranus);

q2a3.addEventListener("click",saturn );
q2a2.addEventListener("click", jupiter);
q2a2.addEventListener("click",neptune );


q2a4.addEventListener("click", murcury);
q2a4.addEventListener("click", earth);


q3a1.addEventListener("click", jupiter);
q3a1.addEventListener("click", saturn);
q3a1.addEventListener("click", uranus);
q3a1.addEventListener("click", neptune);

q3a2.addEventListener("click", dwarf);

q3a3.addEventListener("click", earth);
q3a3.addEventListener("click", thesun);
q3a3.addEventListener("click", murcury);
q3a3.addEventListener("click", mars);
q3a3.addEventListener("click", venus);


q4a1.addEventListener("click", earth);
q4a1.addEventListener("click", thesun);
q4a1.addEventListener("click", murcury);
q4a1.addEventListener("click", mars);
q4a1.addEventListener("click", venus);
q4a1.addEventListener("click", dwarf);


q4a2.addEventListener("click", uranus);
q4a2.addEventListener("click", neptune);


q4a3.addEventListener("click", jupiter);

q4a4.addEventListener("click", saturn);


q5a1.addEventListener("click", jupiter);
q5a1.addEventListener("click", saturn);
q5a1.addEventListener("click", uranus);
q5a1.addEventListener("click", neptune);



q5a3.addEventListener("click", murcury);

q5a2.addEventListener("click", venus);
q5a2.addEventListener("click", earth);
q5a2.addEventListener("click", mars);


q6a1.addEventListener("click", thesun);


q6a2.addEventListener("click", jupiter);
q6a2.addEventListener("click", saturn);
q6a2.addEventListener("click", uranus);
q6a2.addEventListener("click", neptune);
q6a2.addEventListener("click", murcury);
q6a2.addEventListener("click", venus);
q6a2.addEventListener("click", earth);
q6a2.addEventListener("click", mars);
q6a2.addEventListener("click", dwarf);

q7a1.addEventListener("click", dwarf);

q7a2.addEventListener("click", jupiter);
q7a2.addEventListener("click", saturn);
q7a2.addEventListener("click", uranus);
q7a2.addEventListener("click", neptune);
q7a2.addEventListener("click", murcury);
q7a2.addEventListener("click", venus);
q7a2.addEventListener("click", earth);
q7a2.addEventListener("click", mars);

q7a3.addEventListener("click", thesun);

button.addEventListener("click", restart);

function restart() {
  result.innerHTML = "Your are a...";
  console.log("You are a...");
  swordScore = 0;
  spellScore = 0;
  questionCount = 0;
}



function saveScores() {
  localStorage.setItem('thesunScore', thesunScore);
  localStorage.setItem('venusScore', venusScore);
  localStorage.setItem('earthScore', earthScore);
  localStorage.setItem('marsScore', marsScore);
  localStorage.setItem('jupiterScore', jupiterScore);
  localStorage.setItem('saturnScore', saturnScore);
  localStorage.setItem('uranusScore', uranusScore);
  localStorage.setItem('neptuneScore', neptuneScore);
  localStorage.setItem('murcuryScore', murcuryScore);
  localStorage.setItem('dwarfScore', dwarfScore);
  localStorage.setItem('questionCount', questionCount);
}

function saturn() {
  saturnScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" saturnScore = "+ saturnScore);
  saveScores();
}
function thesun() {
  thesunScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" thesunScore = "+ thesunScore);
  saveScores();
}
function mars() {
  marsScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" marsScore = "+ marsScore);
  saveScores();
}

function earth() {
  earthScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" earthScore = "+ earthScore);
  saveScores();
}
function murcury() {
  murcuryScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" murcuryScore = "+ murcuryScore);
  saveScores();
}
function dwarf() {
  dwarfScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" dwarfScore = "+ dwarfScore);
  saveScores();
}
function uranus() {
  uranusScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" uranusScore = "+ uranusScore);
  saveScores();
}
function venus() {
  venusScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" venusScore = "+ venusScore);
  saveScores();
}
function neptune() {
  neptuneScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" neptuneScore = "+ neptuneScore);
  saveScores();
}
function jupiter() {
  jupiterScore += 1;
  questionCount +=1;
  console.log("questionCount ="+questionCount+" jupiterScore = "+ jupiterScore);
  saveScores();
}
function calculateResult() {
  thesunScore = parseInt(localStorage.getItem('thesunScore')) || 0;
  venusScore = parseInt(localStorage.getItem('venusScore')) || 0;
  earthScore = parseInt(localStorage.getItem('earthScore')) || 0;
  marsScore = parseInt(localStorage.getItem('marsScore')) || 0;
  jupiterScore = parseInt(localStorage.getItem('jupiterScore')) || 0;
  saturnScore = parseInt(localStorage.getItem('saturnScore')) || 0;
  uranusScore = parseInt(localStorage.getItem('uranusScore')) || 0;
  neptuneScore = parseInt(localStorage.getItem('neptuneScore')) || 0;
  murcuryScore = parseInt(localStorage.getItem('murcuryScore')) || 0;
  dwarfScore = parseInt(localStorage.getItem('dwarfScore')) || 0;
  
  var scores = {
    'the Sun': thesunScore,
    'Venus': venusScore,
    'Earth': earthScore,
    'Mars': marsScore,
    'Jupiter': jupiterScore,
    'Saturn': saturnScore,
    'Uranus': uranusScore,
    'Neptune': neptuneScore,
    'Mercury': murcuryScore,
    'a Dwarf Planet': dwarfScore
  };
  
  var maxScore = 0;
  var resultPlanet = 'a mystery celestial body';
  
  for (var planet in scores) {
    if (scores[planet] > maxScore) {
      maxScore = scores[planet];
      resultPlanet = planet;
    }
  }
  
  return resultPlanet;
}

if (window.location.pathname.includes('results.html')) {
  window.addEventListener('DOMContentLoaded', function() {
    var resultElement = document.getElementById('result');
    if (resultElement) {
      var result = calculateResult();
      resultElement.innerHTML = "You are " + result + "!";
      console.log("Quiz result: " + result);
    }
  });
}

if (button) {
  button.addEventListener('click', function() {
    localStorage.clear();
    window.location.href = 'index.html';
  });
}
