function Note() {
  this.noteStore = [];
}

Note.prototype.helloWorld = function () {
  return 'Hello World!'
};

Note.prototype.create = function (newNote) {
  this.noteStore.push(newNote);
};
