export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const ans = mathFunction();
    queue.push(ans);
    queue.push('Guardrail was processed');
  } catch (err) {
    queue.push(String(err));
    queue.push('Guardrail was processed');
  }

  return queue;
}
