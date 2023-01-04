export default function CleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString !== '') {
    return '';
  }

  const strlist = [];

  for (const str of set) {
    if (str.startsWith(startString)) {
      strlist.push(str.replace(startString, ''));
    }
  }
  return strlist.join('-');
}
