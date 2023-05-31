const array = [1, 3, 5, 6];
const target = 5;

function index(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    } else if (array[i] > target) {
      return i;
    }
  }

  return array.length;
}

console.log(index(array, target));
