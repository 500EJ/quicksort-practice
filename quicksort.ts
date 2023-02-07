export default function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[0]!;
  let [left, right] = [arr.filter(n => n < pivot), arr.filter(n => n > pivot)];
  left = quicksort(left);
  right = quicksort(right);
  return [...left, pivot, ...right];
}
