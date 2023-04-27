//3.Write a function that takes an array of numbers and returns the average of all the numbers. Use the reduce method to accomplish this.

let arr=[10,20,30,40,50]
function toFindAvg(arr){
let sum=arr.reduce((x,y)=>{
    return x+y
},0)
let avg=sum/arr.length
console.log(avg)
}
toFindAvg(arr)