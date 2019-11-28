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
  var t = document.createTextNode(note.getTruncatedNote(noteIndex));
  noteLink.setAttribute("id", noteIndex);
  noteLink.appendChild(t);
  var hash = "#" + noteIndex;
  noteLink.setAttribute("href", hash);
  document.getElementById("truncatedNotes").appendChild(noteLink);
  document.getElementById("truncatedNotes").appendChild(breakx);
  document.getElementById("entry").value = form.defaultValue;

  window.addEventListener("hashchange", myFunction);
    function myFunction() {
    document.getElementById("fullNote").innerHTML = note.fullNote(noteIndex);
  };
});
