'use strict';

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

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  var splits = split(arr),
      left = splits[0],
      right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
};

function split(arr) {
  var center = arr.length / 2;
  var left = arr.slice(0, center);
  var right = arr.slice(center);
  return [left, right];
};

function merge(left, right) {
  var merged = [],
      li = 0,
      ri = 0;
  while(li < left.length && ri < right.length) {
    if(left[li] < right[ri]) {
      merged.push(left[li]);
      li++;
    } else {
      merged.push(right[ri]);
      ri++;
    };
  };
  //for(; li < left.length; li++) merged.push(left[li]);
  //for(; ri < right.length; ri++) merged.push(right[ri]);
  while(li < left.length) merged.push(left[li++]);
  while(ri < right.length) merged.push(right[ri++]);
  return merged;
};
