//key of an obb as an arrya
function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  
  var person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  
  var keysArray = getObjectKeys(person);
  console.log("Keys of the object: " + keysArray);
  