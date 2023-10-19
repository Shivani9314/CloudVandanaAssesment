function sortDescending(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  // Example usage
  const originalArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = sortDescending(originalArray);
  
  console.log(sortedArray);
  