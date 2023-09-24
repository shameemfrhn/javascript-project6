//clone obj
function cloneObject(obj) {
    return Object.assign({}, obj);
  }
  
  var originalObject = {
    a: 1,
    b: 2
  };
  
  var clonedObject = cloneObject(originalObject);
  console.log("Cloned object: ", clonedObject);
  