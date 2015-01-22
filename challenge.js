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

var sentence = 'AABCDbb';
// console.log(sentence);
// console.log(sentence[4]);
// console.log(sentence.length);
var newWord = [];

// every letter would loop through length of letter index -1, if same, do nth, if different, enter in the array
 
var compare = function(string1, string2){
  if(string2 == string1){
    return string2;
  }
  // else {
  //   // add string2 to array
  //   // return string2; 
  // }
}


var i = 0;
var j = 1;


var removeDuplicates = function(string){
  // newWord.push(string[0]); 
    while(i < j) {
    // console.log('i newWord is ' + newWord);

      for(j = 1; j < string.length; j++){

        if (string[j] == string[i]){
          console.log(string[j], string[i]);
          
          // string.splice(j, 1);
        }
        newWord.push(string[j]);
        console.log('i = ' + i + ' , j = ' + j + ' ' + newWord);
        i++;
        // string[compare(string[i], string[j])];
        // console.log(newWord);
    }
  }
}

        // if(string[i] == string[j]){
        // console.log('== newWord is ' + newWord);
        // }

        // else{
        // newWord.push(string[j]);
        // console.log(string[j] + ' else push newWord is ' + newWord);
        // }

removeDuplicates(sentence);

// looop through the entire string.length 
// from string[0] - string[length]


console.log('>>>>>>>>>> END');
// CHALLENGE 4

console.log('>>>>>>>>>>CHALLENGE 4');

