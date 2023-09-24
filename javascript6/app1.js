//remove poro.. from obj
function removeProperty(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
      delete obj[propertyName];
    }
  }
  
  var person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  
  removeProperty(person, "age");
  console.log(person); 
  