
  function testCreate() {
    var note = new Note();
    expect.toEqual(note.create("Hello World"), "Hello World")
  }

  function testFullNote() {
    var note = new Note();
    note.create("Birthday invite list: Liat, Natalie");
    note.create("Hello World!!!!!!!!!!");
    expect.toEqual(note.fullNote(0), "Birthday invite list: Liat, Natalie")
  }

  function testNoteIndex() {
    var note = new Note();
    note.create("Birthday invite list: Liat, Natalie");
    expect.toEqual(note.noteIndex("Birthday invite list: Liat, Natalie"), 0)
  }

  function testTruncatedNote() {
    var note = new Note();
    note.create("Birthday invite list: Liat, Natalie");
    expect.toEqual(note.getTruncatedNote(0), "Birthday invite list")
  }

testCreate();
testFullNote();
testNoteIndex();
testTruncatedNote();
