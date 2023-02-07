export default function quicksort(arr: number[]): number[] {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0]!;

  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  let [left, right] = [arr.filter(n => n < pivot), arr.filter(n => n > pivot)];

  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}
