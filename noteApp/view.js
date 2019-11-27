document.getElementById("heading").innerHTML = "Notes";

var form = document.createElement('TEXTAREA');
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
  document.getElementById("entry").placeholder = "Enter note here";
  document.getElementById("viewNotes").innerHTML = note.viewNotes(form.value);
})
