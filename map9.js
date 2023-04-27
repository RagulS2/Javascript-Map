//9.Write a function that takes an array of strings and returns an object where the keys are the strings sorted alphabetically and the values are arrays of the original strings that are anagrams of each other. Use the Mapobject to accomplish this

let names=['silent','listen','rat','art','tar']
let obj={};

names.map((x)=>{
    let arr=x.split('').sort().join('');
    if(!(arr in obj)){
        obj[arr] =[]
       }
       obj[arr].push(x)
})
console.log(obj)