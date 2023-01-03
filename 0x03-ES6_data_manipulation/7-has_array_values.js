export default function hasValuesFromArray(set, array) {
  const arrset = new Set(array);
  for (const elem of arrset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
