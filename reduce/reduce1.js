//1.Write a function that takes an array of numbers and returns the sum of all the numbers. Use the reduce method to accomplish this.

let arr=[1,2,3,4,5]
function addNumbers(arr){
let sum=arr.reduce((x,y)=>{
    return x+y
},0)
console.log(sum)
}
addNumbers(arr)