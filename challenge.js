// CHALLENGE 1
console.log('>>>>>>>>>>CHALLENGE 1');

var array1 = [2, 10, 8, 5];
var array2 = [4, 25, 7, 13, 15, 8];


function sortNumber (a, b){
  return b - a;
}

array1 = array1.sort(sortNumber);
array2 = array2.sort(sortNumber);

var bigDiff = function (sortedArray){
  console.log(sortedArray);
  var result = sortedArray[0] - sortedArray[1];
  console.log(result);
  return result;
}

bigDiff(array1);
bigDiff(array2);

console.log('>>>>>>>>>> END');

// CHALLENGE 2
console.log('>>>>>>>>>>CHALLENGE 2');

var array3 = [4, 10, 34, 8, 3, 9, 17];
var array4 = [5, 7, 11, 88, 4, 10];

// console.log(array3);
// console.log(array4);

// Define whether there is an odd or even element array 
var oddOrEven = function (array){
  var num = array.length % 2; 
  if (num == 0){
    // console.log(num, 'even num');
    return true;
  }
  else {
    // console.log(num, 'odd num');
    return false;
  }
}

var medianOf2 = function(array) {
  var middle = array.length/ 2;
  // console.log('this is the half of the array length ' + middle);
  var index1 = middle-1;
  var index2 = middle
  var index3 = middle+1;
  index1 = Math.floor(index1);
  index2 = Math.floor(index2);
  index3 = Math.floor(index3);

  var median2 = (array[index1] + array[index2]) / 2;
  var median3 = (array[index1] + array[index2] + array[index3]) / 3;

  if (oddOrEven(array) == true){
    console.log(median2);
    return (median2);
  } else{
    console.log(median3);
    return (median3);
  }
}

medianOf2(array3);
medianOf2(array4);



console.log('>>>>>>>>>> END');
// CHALLENGE 3

console.log('>>>>>>>>>>CHALLENGE 3');



// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');

