// Word endings 

function addEnding(arr, ending) {
//   const mapped = arr.map(i => i + ending)
return arr.map((word) => word + ending);
  
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));