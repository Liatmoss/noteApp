

  function testView() {
    var note = new Note();
    note.create("Hello World");
    expect.toInclude(note.viewNotes(), "Hello World")
  }

testView();
