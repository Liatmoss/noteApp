var expect = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Test failed")
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passed")
    }
  },

  toEqual: function(actual, expected) {
    if (expected !== actual) {
     console.log("Values are not equal")
     throw new Error(`Expected Value ${expected} but got ${actual}`)
    } else {
      console.log("Test passed")
    }
  },

  toNotEqual: function(actual, expected) {
    if (expected !== actual) {
      console.log("Test passed")
    } else {
      console.log("Values are equal")
      throw new Error(`Expected \"${expected}\" not to equal \"${actual}\"`)
    }
  },

  toInclude: function(parent, child) {
    if(parent.includes(child)) {
      console.log("Test Passed")
    } else {
      console.log("Test failed")
      throw new Error(`Expected \"${child}"\ to be in \"${parent}\"`)
    }
  },

  toNotInclude: function(parent, child) {
    if(parent.includes(child)) {
      console.log("Test failed")
      throw new Error(`Expected \"${child}\" not to be in \"${parent}\"`)
    } else {
      console.log("Test Passed")
    }
  }
}
