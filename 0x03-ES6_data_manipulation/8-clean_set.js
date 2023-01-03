export default function CleanSet(set, startString) {
  const strlist = [];

  if (startString !== '') {
    for (const str of set) {
      if (str.startsWith(startString)) {
        strlist.push(str.replace(startString, ''));
      }
    }
  }
  return strlist.join('-');
}
