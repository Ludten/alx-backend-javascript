export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  try {
    const view = new DataView(arr);
    view.setInt8(position, value);
    return view;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
