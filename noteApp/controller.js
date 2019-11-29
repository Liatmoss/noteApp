
note = new Note();
button.addEventListener ("click", function() {
  note.create(form.value);
  var index = note.noteIndex(form.value);
  var truncatedtext = (note.getTruncatedNote(index));
  renderSummary(truncatedtext, index);


  window.addEventListener("hashchange", myFunction);
    function myFunction() {
    var fullNote = document.getElementById(index);
    fullNote.addEventListener("click", function() {
          var outputText = note.fullNote(index);
          renderText(outputText);
    });
  };
});
