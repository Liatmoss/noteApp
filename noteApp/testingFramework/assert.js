var expect = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  toEqual: function(actual, expected) {
    if (expected !== actual) {
     console.log("Values are not equal")
     console.log(`Expected Value ${expected} but got ${actual}`)
    } else {
      console.log("Test passed")
    }
  },

  toNotEqual: function(expected, actual) {
    if (expected !== actual) {
      logSuccess("Test passed")
    } else {
      logFail("Values are equal")
      console.log(`Expected \"${expected}\" not to equal \"${actual}\"`)
    }
  },

  toInclude: function(parent, child) {
    if(parent.includes(child)) {
      logSuccess("Test Passed")
    } else {
      logFail(`Expected \"${child}"\ to be in \"${parent}\"`)
    }
  },

  toNotInclude: function(parent, child) {
    if(parent.includes(child)) {
      logFail(`Expected \"${child}\" not to be in \"${parent}\"`)
    } else {
      logSuccess("Test Passed")
    }
  }
}
