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
  noteLink.setAttribute("href","")
  document.body.appendChild(noteLink);
  document.body.appendChild(breakx);
  document.getElementById("entry").value = form.defaultValue;

  var fullNote = document.getElementById(noteIndex);
    fullNote.addEventListener ("click", function(clickEvent) {
      clickEvent.preventDefault();
      var fullNote = document.createElement("P");
      var fullText = document.createTextNode(note.fullNote(noteIndex));
      fullNote.appendChild(fullText);
      document.body.appendChild(fullNote);
  })
})
