function removeDuplicatesFromArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("Error: Parameter should be an array.");
    return; // Stop further execution
  }
  return [...new Set(arr)];
}
export default removeDuplicatesFromArray;
