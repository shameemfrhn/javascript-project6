// check two obj have same prop
function haveSameProperties(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (var key of keys1) {
      if (!keys2.includes(key)) {
        return false;
      }
    }
  
    return true;
  }
  
  var objA = { a: 1, b: 2 };
  var objB = { b: 2, a: 1 };
  
  console.log("Do the objects have the same properties? " + haveSameProperties(objA, objB));
  