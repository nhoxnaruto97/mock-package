function findKeyByValue(obj, value) {
  if (Array.isArray(obj) || typeof obj !== "object") {
    console.log("Error: Parameter should be an object.");
    return; // Stop further execution
  }
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return null;
}
export default findKeyByValue;
