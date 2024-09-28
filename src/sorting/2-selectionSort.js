export function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;

    for (let y = i + 1; y < arr.length; y++) {
      if (arr[y] < arr[lowest]) lowest = y;
    }

    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}