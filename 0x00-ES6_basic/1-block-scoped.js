export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newTask = true;
    const newTask2 = false;
    console.log(newTask, newTask2); // just to use them (avoids lint error)
  }

  return [task, task2];
}

