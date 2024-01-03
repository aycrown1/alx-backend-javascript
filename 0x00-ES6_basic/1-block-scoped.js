export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // unused
    task2 = false; // unused
  }

  return [task, task2];
}
