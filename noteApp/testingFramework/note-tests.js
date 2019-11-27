
  function testCreate() {
    var note = new Note();
    expect.toEqual(note.create("Hello World"), "Hello World")
  }

  function testView() {
    var note = new Note();
    note.create("Hello World");
    expect.toInclude(note.viewNotes(), "Hello World")
  }

testCreate();
testView();
