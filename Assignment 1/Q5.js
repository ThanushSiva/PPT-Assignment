const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

let i, j, k;

for (i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--) {
  if (nums1[i] >= nums2[j]) {
    nums1[k] = nums1[i--];
  } else {
    nums1[k] = nums2[j--];
  }
}

while (i >= 0) {
  nums1[k--] = nums1[i--];
}

while (j >= 0) {
  nums1[k--] = nums2[j--];
}

console.log(nums1);