// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

// function formatPhoneNumber01(numbers) {
//   let masked = "(###) ###-####";
//   numbers.forEach((v) => (masked = masked.replace("#", v)));
//   return masked;
// }

function formatPhoneNumber(numbers) {
  let arr = "(XXX) XXX-XXXX".split("");
  numbers.forEach((n) => {
    arr[arr.indexOf("X")] = n;
  });
  return arr.join("");
}

let result01 = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result01);

// Sort Numbers in Ascending Order
// sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

// function sortNumsAscending01(arr) {
//   if (arr === null) return [];
//   return arr.sort((a, b) => a - b);
// }

// const sortNumsAscending = n => n ? n.sort((a,b ) => a - b) : []

function sortNumsAscending(arr) {
  if (arr === null) {
    return [];
  } else if (arr === arr) {
    let arr1 = arr.sort(function (a, b) {
      return a - b;
    });
    return arr1;
  }
}

let result02 = sortNumsAscending([1, 2, 10, 50, 5]);
console.log(result02);

// Spelling out
// spelling("bee") ➞ ["b", "be", "bee"]

// function spelling(str) {
//   let str1 = [];
//   let n = 0;
//   for (c in str)
//   str1.push(str.slice(0, ++n))
//   // let words = [...str]

//   return str1
// }

// function spelling(str) {
//   let newArr = [];
//   for (let i = 1; i <= str.length; i++) {
//     newArr.push(str.slice(0, i));
//   }
//   return newArr;
// }

function spelling(str) {
  return str.split("").map((c, i) => str.slice(0, i + 1));
}

let result03 = spelling("bee");

console.log(result03);

// Absolute Sum
//  getAbsSum([2, -1, 4, 8, 10])

// function countVowels(str) {
//   var regexp = /[a e i o u]/g;
//   var matches = str.match(regexp);
//   return matches.length;
// }

function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

countVowels("Celebration");

// recursion (factorial challenge)

// es6
//const factorial = num => num === 1 ? num : num * factorial(num - 1);


// recursion (factorial challenge)
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let result04 = factorial(5);
console.log(result04);

// const factorial = (num) => (num === 0 ? 1 : num * factorial(--num));

// Remove Every Vowel from a String
// removeVowels("We're gonna build a wall!") ➞ "W'r gnn bld  wll!"

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

let result05 = removeVowels("We're gonna build a wall!");
console.log(result05);

// Return the Highest and Lowest Numbers

function highLow(str) {
  var nums = str.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

let result06 = highLow("1 2 3 4 5");

// function highLow2(str) {
//   const num = str.split(" ");
//   return [Math.max(...num), Math.min(...num)].join(" ");
// }

// Two sum algorithm

function twoSum(nums,target) {
  const previousVal = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const neededval = target -currentNum
    const index2 = previousVal[neededval];
    
    if (index2 != null) {
      return [ index2, i ]
    } else{
      previousVal[currentNum] = i
    }
    
  }

  
}

let result07 = twoSum([2,7,11,15], 26)
console.log(result07);

// valid zip code 
// Must only contain numbers (no non-digits allowed). Must not contain any spaces.Must not be greater than 5 digits in length.

function isValid(zip) {
let regexTest = RegExp(/[0-9]{5}/);
return regexTest.test(zip);

}

let result08 = isValid("59001");
console.log(result08);

// es6
const isValid = (zip) => /^\d{5}$/.test(zip);

// return the index of the first vowel in a string 

function firstVowel(str) {

	return str.search(/a|e|i|o|u/i);
}

const firstVowelES6 = (str) => str.search(/[aeiou]/i);
firstVowel("hello");


