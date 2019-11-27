function Note() {
  this.noteStore = [];
  this.truncated = [];
}

Note.prototype.create = function (newNote) {
 this.noteStore.push(newNote);
 return newNote
};

Note.prototype.viewNotes = function () {
  for (var i = 0; i < this.noteStore.length; i++) {
    this.truncated.push(this.noteStore[i].slice(0, 20))
  }
  return this.truncated;
};

Note.prototype.fullNote = function(index) {
  return this.noteStore[index];
}
