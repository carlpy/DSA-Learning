export function bubbleSort(arr) {
  let end = arr.length - 1;
  let isSorted = false;
  
  while(!isSorted) {
    isSorted = true;
    for (let i = 0; i < end; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i + 1]
        arr[i+1] = arr[i];
        arr[i] = temp;
        isSorted = false;
      }
    }
    end--;
  }
  
  return arr;
}

/* 
  the elemental sorting algorithm (N(N-1)/2) O(N²) 
  which is known for its simplicity rather than it's performance
  make n comparisons and n swaps per pass-through
*/