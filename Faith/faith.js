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

let result01 =formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
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
     } 
     else if (arr === arr) {
        let arr1 = arr.sort(function (a, b) {
          return a - b;
        });
        return arr1;
    }   
    
}


let result02=sortNumsAscending([1, 2, 10, 50, 5]);
console.log(result02);