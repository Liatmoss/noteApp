function Note() {
  this.noteStore = [];
}

Note.prototype.create = function (newNote) {
 this.noteStore.push(newNote);
 return newNote
};

Note.prototype.fullNote = function(index) {
  return this.noteStore[index];
}

Note.prototype.noteIndex = function (fullNote) {
  return this.noteStore.indexOf(fullNote)
};

Note.prototype.getTruncatedNote = function(index) {
  return this.noteStore[index].slice(0,20);

};
