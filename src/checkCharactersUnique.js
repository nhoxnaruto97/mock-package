function checkCharactersUnique(str) {
  if (typeof str !== "string") {
    console.log("Error: Parameter should be an string.");
    return; // Stop further execution
  }
  const charSet = new Set(str);
  return charSet.size === str.length;
}
export default checkCharactersUnique;
