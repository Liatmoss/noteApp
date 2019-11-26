
  function test1() {
    var note = new Note();
    expect.isTrue(note.helloWorld() === 'Hello World!');
  }

  function test2() {
    var note = new Note();
    expect.toEqual(note.helloWorld(), "Hello World!")
  }

  function test3() {
    var note = new Note();
    expect.toNotEqual("Hello", note.helloWorld())
  }

  function test4() {
    var note = new Note();
    expect.toInclude(note.helloWorld(), "Hello")
  }

  function test5() {
    var note = new Note();
    expect.toNotInclude(note.helloWorld(), "blue")
  }

  function testCreate() {
    var note = new Note();
    note.create("Hello World");
    expect.toInclude(note.noteStore, "Hello World")
  }

  function testView() {
    var note = new Note();
    note.create("Hello World");
    expect.toEqual(note.viewNotes(), "Hello World")
  }

test1();
test2();
test3();
test4();
test5();
testCreate();
testView();
