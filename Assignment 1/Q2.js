const array = [3, 2, 2, 3];
const val = 3;
let count = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] !== val) {
    array[count++] = array[i];
  }
}

console.log(count);
