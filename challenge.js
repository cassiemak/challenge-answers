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

var array3 = [4, 10, 34, 8, 3, 9, 17, 76, 12];
var array4 = [5, 7, 11, 88];

// console.log(array3);
// console.log(array4);

var averageMedian = function(array) {
  var middle = array.length / 2;

  var index1 = Math.floor(middle-1);
  var index2 = Math.floor(middle);
  var index3 = Math.floor(middle+1);

  // console.log(index1, index2, index3);

  var median2 = (array[index1] + array[index2]) / 2;
  var median3 = (array[index1] + array[index2] + array[index3]) / 3;

  var oddEven = array.length % 2;

  if (oddEven == 0){
    console.log('The average of the median of this array is ' + median2);
    return (median2);
  }
  else {
    console.log('The average of the median of this array is ' + median3);
    return (median3);
  }
}

averageMedian(array3);
averageMedian(array4);


console.log('>>>>>>>>>> END');
// CHALLENGE 3
console.log('>>>>>>>>>>CHALLENGE 3');

var sentence = 'Proud Student of Harry and Paul';
var newWord = [];

var compare = function(element, string){
  for (var i = 0; i < string.length; i++){
    if(element == string[i]){
      // console.log('true');
      return true;
    }
  }
  // console.log('false');
  return false;
}

var removeDuplicates = function(string){
  console.log(string);
  newWord.push(string[0]); 
  // console.log(newWord);
    for (var i = 1; i < string.length; i++) {
      // console.log(newWord);
      if (compare(string[i], newWord) == false){
        newWord.push(string[i]);
        // console.log(newWord);
      }
    }
  var newestWord = newWord.join('');
  console.log(newestWord);
}

removeDuplicates(sentence);


console.log('>>>>>>>>>> END');
// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');

