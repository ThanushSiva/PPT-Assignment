const array = [0, 1, 0, 3, 12];
let count = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] != 0) {
    array[count] = array[i];
    count += 1;
  }
}

while (count < array.length) {
  array[count] = 0;
  count += 1;
}

console.log(array);