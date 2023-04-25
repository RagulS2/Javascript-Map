//8.Write a function that takes an array of objects with a name and age property and returns an object where the keys are the age and the values are arrays of objects with that age. Use the Mapobject to accomplish this.
let emp=[
    {name:'Ragul',age:22},
    {name:'Netha',age:23},
    {name:'Sridhar',age:22},
    {name:'Aravindh',age:20},
]
let obj={}
emp.map((x)=>{
    if(!(x.age in obj)){
        obj[x.age]=[]
    }
    obj[x.age].push(x)
})
console.log(obj)
