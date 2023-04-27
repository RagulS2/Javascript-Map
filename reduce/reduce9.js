
//9.Write a function that takes an array of numbers and returns the product of all the numbers. Use the reduce method to accomplish this.

let arr=[1,2,3,4,5,6]
function mulNumbers(arr){
let mul=arr.reduce((x,y)=>{
    return x*y
},1)
console.log(mul)
}
mulNumbers(arr)