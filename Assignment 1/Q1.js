const array = [2, 7, 11, 15];
const target = 9;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == target) {
      console.log([i,j]);
    }
  }
}