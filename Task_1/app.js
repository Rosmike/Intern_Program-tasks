const cloneObject = (objectToClone) => {
  if (objectToClone == null || typeof objectToClone !== "object") {
    // checking if passing parameter is null or undefined, if it is returns empty object
    console.error("Argument objectToClone is null or is not an object"); // it shows in console information about it
    return {}; // it also returns an empty object
  }
  return Object.assign(
    // if everything is ok it will clone the object using ES6 functions -> object assign, create and prototypeof
    Object.create(Object.getPrototypeOf(objectToClone)),
    objectToClone
  );
};
