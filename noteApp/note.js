function Note() {
  this.noteStore = [];
}

Note.prototype.create = function (newNote) {
  this.noteStore.push(newNote);
};

Note.prototype.viewNotes = function () {
  return this.noteStore
};
