//6.Write a function that takes an array of strings and returns a new array with only the unique strings. Use the Mapobject to accomplish this.
let arr=['Ragul','Rahul','Ragul','ragul']
let farr=[];
arr.map((x) =>{
    if(!(farr.includes(x))){
    farr.push(x)
    }
})
console.log(farr)