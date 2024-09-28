export function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let pos = i - 1;
    
    while (pos >= 0 && arr[pos] > temp) {
      arr[pos + 1] = arr[pos]
      pos--;
    }
    
    arr[pos + 1] = temp;
  }
  
  return arr;
}