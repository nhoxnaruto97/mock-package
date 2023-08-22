function checkObjectsEqual(obj1, obj2) {
  if (
    Array.isArray(obj1) ||
    Array.isArray(obj2) ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    console.log("Error: Parameter should be an object.");
    return; // Stop further execution
  }
  const arr1 = [];
  const arr2 = [];
  for (var item in obj1) {
    arr1.push([item, obj1[item]]);
  }
  for (var item in obj2) {
    arr2.push([item, obj2[item]]);
  }
  return JSON.stringify(arr1?.sort()) === JSON.stringify(arr2?.sort());
}
export default checkObjectsEqual;
