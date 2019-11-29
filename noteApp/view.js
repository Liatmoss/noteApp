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

function renderSummary(truncatedtext, index)  {
  var breakx = document.createElement("BR");
  var noteLink = document.createElement("A");
  var t = document.createTextNode(truncatedtext);
  noteLink.setAttribute("id", index);
  noteLink.appendChild(t);
  var hash = "#" + index;
  noteLink.setAttribute("href", hash);
  document.getElementById("truncatedNotes").appendChild(noteLink);
  document.getElementById("truncatedNotes").appendChild(breakx);
  document.getElementById("entry").value = form.defaultValue;
}

function renderText(outputText) {
  document.getElementById("fullNote").innerHTML = outputText;
};
