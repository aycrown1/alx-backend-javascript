export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const resolve = mathFunction();
    queue.push(resolve);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
