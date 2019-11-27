document.getElementById("heading").innerHTML = "Notes";

var form = document.getElementById("entry");
form.setAttribute("placeholder", "Enter note here");


var button = document.getElementById("button");
var text = document.createTextNode("Create Note");
button.appendChild(text);

note = new Note();
button.addEventListener ("click", function() {
  note.create(form.value);
  document.getElementById("entry").value = "Enter note here";
  document.getElementById("viewNotes").innerHTML = note.viewNotes(form.value);
})
