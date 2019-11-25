var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

var equal = {
  isEqual: function(equalityToCheck) {
    if (!equalityToCheck) {
      throw new Error("Equality failed: " + equalityToCheck + " is not equal");
    }
  }
}
