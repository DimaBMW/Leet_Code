/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  } else {
    return mergedArray[middleIndex];
  }
};
