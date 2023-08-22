function checkCommonElements(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Error: Parameter should be an array.");
    return; // Stop further execution
  }
  return arr1.some((item) => arr2.includes(item));
}
export default checkCommonElements;
