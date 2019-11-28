document.getElementById("heading").innerHTML = "Notes";

var form = document.getElementById("entry");
form.setAttribute("placeholder", "Enter note here" );
form.style.fontSize = '15px';


var button = document.getElementById("button");
button.style.width = '100px'
button.style.height = '50px'
button.style.fontSize = '15px'
var text = document.createTextNode("Create Note");
button.appendChild(text);

note = new Note();
button.addEventListener ("click", function() {
  note.create(form.value);
  var breakx = document.createElement("BR");
  var noteIndex = note.noteIndex(form.value);
  var noteLink = document.createElement("A");
  console.log(form.value);
  console.log("noteindex", noteIndex);
  console.log(note.getTruncatedNote(noteIndex));
  var t = document.createTextNode(note.getTruncatedNote(noteIndex));
  noteLink.setAttribute("id", noteIndex);
  noteLink.appendChild(t);
  noteLink.setAttribute("href","")
  document.body.appendChild(noteLink);
  document.body.appendChild(breakx);
  document.getElementById("entry").value = form.defaultValue;
  // document.getElementById("viewNotes").innerHTML = note.viewNotes(form.value);
})

// var fullNote = document.getElementById("viewNotes");
//   fullNote.addEventListener ("click", function(clickEvent) {
//     clickEvent.preventDefault();
//     document.getElementById("fullNote").innerHTML = note.fullNote(0)
// })
