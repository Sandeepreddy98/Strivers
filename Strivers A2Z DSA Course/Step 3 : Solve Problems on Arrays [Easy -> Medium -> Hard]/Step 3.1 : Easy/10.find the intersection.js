function findIntersection(arr1, arr2) { // TC - O(n1+n2), SC- O(n1+n2) for returning
  let i = 0;
  let j = 0;
  let intersectedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      intersectedArray.push(arr1[i]);
      i++;
      j++;
    }
  }
  return intersectedArray;
}

console.log(findIntersection([1, 2, 2, 3, 4, 4, 5], [1, 2, 3, 4, 4, 5]));
