//2.Write a function that takes an array of objects with a price property and returns the total cost of all the objects. Use the reduce method to accomplish this.

let arr=[{obj:'shoe',price:999},
{obj:'bag',price:1999},{obj:'watch',price:2500}]
 function toAdd(arr){
let sum=arr.reduce((x,y)=>{
    return x+y.price;
},0)
console.log(sum)
 }
 toAdd(arr)