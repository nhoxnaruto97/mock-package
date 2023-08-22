function countOccurrences(str, char) {
  if (typeof str !== "string") {
    console.log("Error: Parameter should be an string.");
    return; // Stop further execution
  }
  return str.split(char).length - 1;
}
export default countOccurrences;
