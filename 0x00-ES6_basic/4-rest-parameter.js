export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  // eslint-disable-next-line no-unused-vars
  for (const arg of theArgs) {
    total += 1;
  }
  return total;
}
