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
  document.getElementById("entry").value = form.defaultValue;
  document.getElementById("viewNotes").innerHTML = note.viewNotes(form.value);
})
