
  function testHelloWorld() {
    var note = new Note();
    expect.isTrue(note.helloWorld() === 'Hello World!');
  }
  testHelloWorld();

  function testHelloWorld() {
    var note = new Note();
    expect.toEqual(note.helloWorld(), "Hello World!")
  }


  // function testHelloWorld() {
  //   var note = new Note();
  //   equal.isEqual(note.helloWorld() === 'Hello');
  // };
  //
  // testHelloWorld();
