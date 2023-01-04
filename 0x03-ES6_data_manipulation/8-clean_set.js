export default function CleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString !== '') {
    return '';
  }

  let array = Array.from(set);
  const len = startString.length;
  array = array.filter((a) => (a[0] === startString[0]) && (a.substr(0, len) === startString));
  return array.map((s) => s.substring(len)).join('-');
}
