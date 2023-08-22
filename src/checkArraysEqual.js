function checkArraysEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Error: Parameter should be an array.");
    return; // Stop further execution
  }
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
export default checkArraysEqual;
