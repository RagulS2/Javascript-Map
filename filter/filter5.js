//5.Writea function that takes an array of objects with a nameand ageproperty and returns a new array with only the objects where the age is greater than a given amount. Use the filtermethod to accomplish this.



let details=[{name:'Ragul',age:22},
{name:'Aravi',age:17},
{name:'Netha',age:24}];
function ageGreater(details,maxage){
  let b= details.filter((x)=>x.age >maxage
)
console.log(b)
}
ageGreater(details,18)


