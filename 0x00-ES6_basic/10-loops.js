export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (const idx of array) {
    value.append(appendString + idx);
  }

  return value;
}
