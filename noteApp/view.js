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
