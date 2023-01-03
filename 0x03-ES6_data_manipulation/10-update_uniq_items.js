export default function updateUniqueItems(holmap) {
  if (holmap instanceof Map) {
    for (const [key, value] of holmap) {
      if (value === 1) {
        holmap.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot Process');
  }
}
