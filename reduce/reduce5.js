//5.Write a function that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.

let arr=['Ragul','Nethaji','Ragul','Saravanan','Saravanan','Aravindh']
function countOccurrences(arr) {
   let b= arr.reduce((x, y) => {
      if (y in x) {
        x[y]+=1;
      } else {
        x[y] = 1;
      }
      return x;
    }, {})
    console.log(b)
  }
  countOccurrences(arr)