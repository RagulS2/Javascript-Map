//5.Write a function that takes an array of objects with a category property and returns an object where the keys are the categories, and the values are arrays of objects with that category. Use 

let clg=[
    {name:'Ragul',degree:'IT'},
    {name:'Saravanan',degree:'cse'},
    {name:'Saravanan',degree:'IT'},
]
obj={}
clg.map((x)=>{
    if(!(x.degree in obj)){
     obj[x.degree] =[]
    }
   obj[x.degree].push(x)
})
console.log(obj)