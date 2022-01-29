/*Navbar*/
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})



// Modal 1
var modal = document.getElementById("myModal");

// Boton apertura modal
var btn = document.getElementById("myBtn");

// Cierre del modal
var span = document.getElementsByClassName("close")[0];

// Apertura del modal 
btn.onclick = function() {
  modal.style.display = "block";
}

//Cierre de X, Cierre del modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario cliquea en lugares fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function move(link){
  window.location=link;
}


// Modal2
var modal2 = document.getElementById("myModal2");

// Boton apertura modal
var btn2 = document.getElementById("myBtn2");

//  Cierre del modalal
var span2 = document.getElementsByClassName("close2")[0];

// Apertura del modal  
btn2.onclick = function() {
  modal2.style.display = "block";
}

// Cierre de X, Cierre del modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// Cuando el usuario cliquea en lugares fuera del modal
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
function move(link){
  window.location=link;
}


// // Modal 3
var modal3 = document.getElementById("myModal3");

// Boton apertura modal
var btn3 = document.getElementById("myBtn3");

//  Cierre del modalal
var span3 = document.getElementsByClassName("close3")[0];

// Apertura del modal  
btn3.onclick = function() {
  modal3.style.display = "block";
}

// Cierre de X, Cierre del modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// Cuando el usuario cliquea en lugares fuera del modal
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
function move(link){
  window.location=link;
}


// Modal 4
var modal4 = document.getElementById("myModal4");

// Boton apertura modal
var btn4 = document.getElementById("myBtn4");

//  Cierre del modalal
var span4 = document.getElementsByClassName("close4")[0];

// Apertura del modal  
btn4.onclick = function() {
  modal4.style.display = "block";
}

// Cierre de X, Cierre del modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// Cuando el usuario cliquea en lugares fuera del modal
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
function move(link){
  window.location=link;
}


// Modal 5
var modal5 = document.getElementById("myModal5");

// Boton apertura modal
var btn5 = document.getElementById("myBtn5");

//  Cierre del modalal
var span5 = document.getElementsByClassName("close5")[0];

// Apertura del modal  
btn5.onclick = function() {
  modal5.style.display = "block";
}

// Cierre de X, Cierre del modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// Cuando el usuario cliquea en lugares fuera del modal
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
function move(link){
  window.location=link;
}
 

// Modal 6
var modal6 = document.getElementById("myModal6");

// Boton apertura modal
var btn6 = document.getElementById("myBtn6");

//  Cierre del modalal
var span6 = document.getElementsByClassName("close6")[0];

// Apertura del modal  
btn6.onclick = function() {
  modal6.style.display = "block";
}

// Cierre de X, Cierre del modal
span6.onclick = function() {
  modal6.style.display = "none";
}

// Cuando el usuario cliquea en lugares fuera del modal
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
function move(link){
  window.location=link;
}
 


// Modal 7
var modal7 = document.getElementById("myModal7");

// Boton apertura modal
var btn7 = document.getElementById("myBtn7");

//  Cierre del modalal
var span7 = document.getElementsByClassName("close7")[0];

// Apertura del modal  
btn7.onclick = function() {
  modal7.style.display = "block";
}

// Cierre de X, Cierre del modal
span7.onclick = function() {
  modal7.style.display = "none";
}

// Cuando el usuario cliquea en lugares fuera del modal
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}
function move(link){
  window.location=link;
}
 

