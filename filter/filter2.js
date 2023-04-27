//2.Write a function that takes an array of objects with a priceproperty and returns a new array with only the objects that have a price less than a given amount. Use the filtermethod to accomplish this.
let arr=[{objname:'chair',price:2500},
{objname:'pen',price:50},
{objname:'shoe',price:999}
]

 function less(arr,maxPrice){
 lessthan1k=arr.filter((x) =>(x.price)<maxPrice

 )
 console.log(lessthan1k);   
 }
 less(arr,1500)
