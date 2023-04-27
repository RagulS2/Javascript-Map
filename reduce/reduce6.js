
//6.Write a function that takes an array of objects with a name and age property and returns the average age of all the objects. Use the reduce method to accomplish this.

let arr=[
    {name:'Ragul',age:22},
    {name:'saravan',age:22},
    {name:'netha',age:23}]


   function toFindAvg(arr){
    let sumofage=arr.reduce((x,y) =>{
        return x+y.age
    },0)
    let avg=sumofage/arr.length

    console.log(avg)
}
toFindAvg(arr)