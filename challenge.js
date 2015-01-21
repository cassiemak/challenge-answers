// CHALLENGE 1
console.log('>>>>>>>>>>CHALLENGE 1');

var array1 = [2, 10, 8, 5];
var array2 = [4, 25, 7, 13];


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

var compare = function(array){
  for (var i = 0;i < array.length; i++){
    // console.log(array[i]); 

  };
}

console.log('>>>>>>>>>>CHALLENGE 2');



// CHALLENGE 3

console.log('>>>>>>>>>>CHALLENGE 3');



// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');

