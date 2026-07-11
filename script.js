// ==========================
// AREA CALCULATORS
// ==========================

// Rectangle
function rectangleArea() {

    let length = parseFloat(document.getElementById("rectLength").value);
    let width = parseFloat(document.getElementById("rectWidth").value);

    if(isNaN(length) || isNaN(width)){
        alert("Please enter both length and width.");
        return;
    }

    let answer = length * width;

    document.getElementById("rectResult").value = answer;
}

// Square
function squareArea(){

    let side = parseFloat(document.getElementById("squareSide").value);

    if(isNaN(side)){
        alert("Please enter the side.");
        return;
    }

    let answer = side * side;

    document.getElementById("squareResult").value = answer;
}

// Triangle
function triangleArea(){

    let base = parseFloat(document.getElementById("triBase").value);
    let height = parseFloat(document.getElementById("triHeight").value);

    if(isNaN(base) || isNaN(height)){
        alert("Please enter the base and height.");
        return;
    }

    let answer = (base * height) / 2;

    document.getElementById("triResult").value = answer;
}

// Circle
function circleArea(){

    let radius = parseFloat(document.getElementById("circleRadius").value);

    if(isNaN(radius)){
        alert("Please enter the radius.");
        return;
    }

    let answer = Math.PI * radius * radius;

    document.getElementById("circleResult").value = answer;
}

// Parallelogram
function parallelogramArea(){

    let base = parseFloat(document.getElementById("paraBase").value);
    let height = parseFloat(document.getElementById("paraHeight").value);

    if(isNaN(base) || isNaN(height)){
        alert("Please enter the base and height.");
        return;
    }

    let answer = base * height;

    document.getElementById("paraResult").value = answer;
}

// Trapezoid
function trapezoidArea(){

    let base1 = parseFloat(document.getElementById("trapBase1").value);
    let base2 = parseFloat(document.getElementById("trapBase2").value);
    let height = parseFloat(document.getElementById("trapHeight").value);

    if(isNaN(base1) || isNaN(base2) || isNaN(height)){
        alert("Please fill in all values.");
        return;
    }

    let answer = ((base1 + base2) * height) / 2;

    document.getElementById("trapResult").value = answer;
}

// =======================
// VOLUME CALCULATORS
// =======================

// Cube
function cubeVolume(){

let side = parseFloat(document.getElementById("cubeSide").value);

if(isNaN(side)){
alert("Enter the side.");
return;
}

let volume = side*side*side;

document.getElementById("cubeResult").value = volume;

}

// Cylinder
function cylinderVolume(){

let r = parseFloat(document.getElementById("cylRadius").value);
let h = parseFloat(document.getElementById("cylHeight").value);

if(isNaN(r)||isNaN(h)){
alert("Enter radius and height.");
return;
}

let volume = Math.PI*r*r*h;

document.getElementById("cylResult").value = volume.toFixed(2);

}

// Cone
function coneVolume(){

let r = parseFloat(document.getElementById("coneRadius").value);
let h = parseFloat(document.getElementById("coneHeight").value);

if(isNaN(r)||isNaN(h)){
alert("Enter radius and height.");
return;
}

let volume = (Math.PI*r*r*h)/3;

document.getElementById("coneResult").value = volume.toFixed(2);

}

// Sphere
function sphereVolume(){

let r = parseFloat(document.getElementById("sphereRadius").value);

if(isNaN(r)){
alert("Enter the radius.");
return;
}

let volume = (4/3)*Math.PI*r*r*r;

document.getElementById("sphereResult").value = volume.toFixed(2);

}

// Rectangular Prism
function prismVolume(){

let l = parseFloat(document.getElementById("prismLength").value);
let w = parseFloat(document.getElementById("prismWidth").value);
let h = parseFloat(document.getElementById("prismHeight").value);

if(isNaN(l)||isNaN(w)||isNaN(h)){
alert("Enter all values.");
return;
}

let volume = l*w*h;

document.getElementById("prismResult").value = volume;

}

// =============================
// PERIMETER CALCULATORS
// =============================

// Rectangle
function rectanglePerimeter(){

let length = parseFloat(document.getElementById("prectLength").value);
let width = parseFloat(document.getElementById("prectWidth").value);

if(isNaN(length)||isNaN(width)){
alert("Please enter both values.");
return;
}

let perimeter = 2*(length+width);

document.getElementById("prectResult").value = perimeter;

}

// Square
function squarePerimeter(){

let side = parseFloat(document.getElementById("psquareSide").value);

if(isNaN(side)){
alert("Please enter the side.");
return;
}

let perimeter = 4*side;

document.getElementById("psquareResult").value = perimeter;

}

// Triangle
function trianglePerimeter(){

let s1 = parseFloat(document.getElementById("triSide1").value);
let s2 = parseFloat(document.getElementById("triSide2").value);
let s3 = parseFloat(document.getElementById("triSide3").value);

if(isNaN(s1)||isNaN(s2)||isNaN(s3)){
alert("Please enter all three sides.");
return;
}

let perimeter = s1+s2+s3;

document.getElementById("triPerimeterResult").value = perimeter;

}

// Circle
function circlePerimeter(){

let radius = parseFloat(document.getElementById("circleRadiusP").value);

if(isNaN(radius)){
alert("Please enter the radius.");
return;
}

let circumference = 2*Math.PI*radius;

document.getElementById("circlePerimeterResult").value = circumference.toFixed(2);

}

// Parallelogram
function parallelogramPerimeter(){

let base = parseFloat(document.getElementById("paraBaseP").value);
let side = parseFloat(document.getElementById("paraSideP").value);

if(isNaN(base)||isNaN(side)){
alert("Please enter both values.");
return;
}

let perimeter = 2*(base+side);

document.getElementById("paraPerimeterResult").value = perimeter;

}

// =============================
// SCIENTIFIC CALCULATOR
// =============================

function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){

    let expression = document.getElementById("display").value;

    try{
        let answer = eval(expression);
        document.getElementById("display").value = answer;
    }
    catch{
        document.getElementById("display").value = "Error";
    }

}

function squareRoot(){

    let value = document.getElementById("display").value;

    try{
        let answer = Math.sqrt(eval(value));
        document.getElementById("display").value = answer;
    }
    catch{
        document.getElementById("display").value = "Error";
    }

}

// =============================
// DIAMETER PAGE
// =============================

// Diameter
function calculateDiameter(){

    let radius = parseFloat(document.getElementById("radiusInput").value);

    if(isNaN(radius)){
        alert("Please enter a radius.");
        return;
    }

    let diameter = radius * 2;

    document.getElementById("diameterAnswer").value = diameter;

}

// Radius
function calculateRadius(){

    let diameter = parseFloat(document.getElementById("diameterInput").value);

    if(isNaN(diameter)){
        alert("Please enter a diameter.");
        return;
    }

    let radius = diameter / 2;

    document.getElementById("radiusAnswer").value = radius;

}

// Circumference
function calculateCircumference(){

    let radius = parseFloat(document.getElementById("circumferenceRadius").value);

    if(isNaN(radius)){
        alert("Please enter a radius.");
        return;
    }

    let circumference = 2 * Math.PI * radius;

    document.getElementById("circumferenceAnswer").value = circumference.toFixed(2);

}

//============================
// GUESS THE NUMBER GAME
//============================

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let history = document.getElementById("historyList");

function checkGuess(){

    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

  
    if(guess < secretNumber){

    message.innerHTML = "🔻 Too Low!";
    message.style.color = "red";

    history.innerHTML +=
    "<li>🔻 " + guess + " - Too Low</li>";

}

else if(guess > secretNumber){

    message.innerHTML = "🔺 Too High!";
    message.style.color = "green";

    history.innerHTML +=
    "<li>🔺 " + guess + " - Too High</li>";

}

else{

    message.innerHTML =
    "🎉 Congratulations! You guessed it in " +
    attempts + " attempt(s)!";

    message.style.color = "blue";

    history.innerHTML +=
    "<li>🎉 " + guess + " - Correct!</li>";

    document.getElementById("restartBtn").style.display="inline-block";

    document.getElementById("guessBtn").disabled=true;

}

}

function restartGame(){

    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("attempts").innerHTML = "0";
    document.getElementById("guessInput").value = "";

    let message = document.getElementById("message");
    message.innerHTML = "";
    message.style.color = "black";

    // Hide Play Again
    document.getElementById("restartBtn").style.display = "none";

    // Enable Guess button
    document.getElementById("guessBtn").disabled = false;

    document.getElementById("historyList").innerHTML = "";

}


/* MUSIC */

function toggleMusic(){

    const music = document.getElementById("bgMusic");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }

}