const array = [1, 2, 3];
let add = 1;

for (let i = array.length - 1; i >= 0; i--) {
  const sum = array[i] + add;
  array[i] = sum % 10;
  add = Math.floor(sum / 10);

  if (add === 0) {
    break;
  }
}

if (add === 1) {
  array.unshift(1);
}

console.log(array);