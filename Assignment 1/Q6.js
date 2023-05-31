const array = [1, 2, 3, 1];

function isDuplicate() {
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (array[i] == array[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(isDuplicate());