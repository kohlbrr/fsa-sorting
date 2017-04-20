function bubbleSort(arr) {
  // If arr i+1 > arr i
  //  swap
  // Continue until it runs clean
  var flag;
  do {
    flag = false;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        arr = swap(arr, i, i+1);
        flag = true;
      };
    };
  } while(flag);
  return arr;
};

function swap(arr, a, b) {
  var c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
  return arr;
};
