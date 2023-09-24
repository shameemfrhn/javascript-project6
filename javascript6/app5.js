function getPropertyValues(obj, propertyName) {
    var valuesArray = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && key === propertyName) {
        valuesArray.push(obj[key]);
      }
    }
    return valuesArray;
  }
  
  var person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  
  var ageValues = getPropertyValues(person, "age");
  console.log("Values of the 'age' property: " + ageValues);
  