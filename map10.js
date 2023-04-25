//10.Write a function that takes an array of objects with a date property and returns an object where the keys are the year and the values are arrays of objects with that year. Use the Mapobject to accomplish this.
let details=[
{name:'Ragul',dob:'2000-09-02'},
{name:'Aravindh',dob:'2002-02-26'},
{name:'Nethaji',dob:'2000-11-09'}
]
let obj={}
details.map((e)=>{
    let c= new Date(e.dob).getFullYear()
    // console.log(c)
    // let c=(e.dob).getFullYear()
    if(!(c in obj)){
        obj[c]=[]
    }
    obj[c].push(e)
})
console.log(obj)
