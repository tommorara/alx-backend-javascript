export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // we don’t redeclare new variables, we just keep this block
  }

  return [task, task2];
}

