function Note() {
  this.noteStore = [];
}

Note.prototype.helloWorld = function () {
  return 'Hello World!'
};

Note.prototype.create = function (newNote) {
  this.noteStore.push(newNote);
};

Note.prototype.viewNote = function () {
  for (i = 0; i < this.noteStore.length; i ++) {
      return(this.noteStore[i]);
  }
};
