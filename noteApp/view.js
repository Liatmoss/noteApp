// 'use strict';
// import { Note } from "./note.js";
// class View {
//   constructor() {
//   this.app = this.getElement('#root')
//   this.form = this.createElement('form')
//   this.input = this.createELement('input')
//    // The title of the app
//    this.title = this.createElement('h1')
//    this.title.textContent = 'Notes'
//   }
//
//   // Create an element with an optional CSS class
//   createElement(tag, className) {
//     const element = document.createElement(tag)
//     if (className) element.classList.add(className)
//
//     return element
//   }
//
//   getElement(selector) {
//     const element = document.querySelector(selector)
//
//     return element
// }
// }

document.getElementById("heading").innerHTML = "Notes";

var form = document.createElement('INPUT');
form.setAttribute("type", "text");
form.setAttribute("placeholder", "Enter note here");
form.id = "entry"
document.body.appendChild(form);

var button = document.createElement("BUTTON");
var text = document.createTextNode("Create Note");
button.appendChild(text);
document.body.appendChild(button);
note = new Note();
button.addEventListener ("click", function() {
  note.create(form.value);
  document.getElementById("entry").value = "Enter note here";
  document.getElementById("viewNotes").innerHTML = note.viewNotes();
})

// note2 = new Note ();
// var output = note.viewNotes();
// document.body.onload = addElement;
// function addElement () {
// var newDiv = document.createElement("div");
// var newContent = document.createTextNode(note.viewNotes());
// newDiv.appendChild(newContent);
// var currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);
// }
