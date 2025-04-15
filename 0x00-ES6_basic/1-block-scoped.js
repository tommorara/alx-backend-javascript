export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // These variables are block scoped and do not affect the outer ones.
    const innerTask = true;
    const innerTask2 = false;
  }

  return [task, task2];
}

