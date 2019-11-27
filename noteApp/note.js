function Note() {
  this.noteStore = [];
  this.truncated = [];
}

Note.prototype.create = function (newNote) {
 this.noteStore.push(newNote);
 return newNote
};

Note.prototype.viewNotes = function () {
  this.truncated.push(this.noteStore[this.noteStore.length - 1].slice(0, 20));
  return this.truncated;
};

Note.prototype.fullNote = function(index) {
  return this.noteStore[index];
}
