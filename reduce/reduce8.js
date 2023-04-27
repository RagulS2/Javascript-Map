//8.Write a function that takes an array of objects with a name and salary property and returns the total salary of all the employees. Use the reduce method to accomplish this.


let emp=[
    {name:'Ragul',sal:80000},    {name:'netha',sal:10000} ,     {name:'aravi',sal:9999}
]

function toFindTot(emp){
let total=emp.reduce((x,y)=>{
    return x+y.sal;
 },0)
 console.log(total)
}
toFindTot(emp)