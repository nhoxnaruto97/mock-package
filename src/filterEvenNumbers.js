function filterEvenNumbers(arr) {
  if (!Array.isArray(arr)) {
    console.log("Error: Parameter should be an array.");
    return; // Stop further execution
  }
  return arr.filter((num) => num % 2 === 0);
}
export default filterEvenNumbers;
