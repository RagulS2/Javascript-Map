//9.Write a function that takes an array of strings and returns an object where the keys are the strings sorted alphabetically and the values are arrays of the original strings that are anagrams of each other. Use the Mapobject to accomplish this

let names=['ragul','kishore']
let obj={}
names.map((x)=>{
    split=x.split("");
    sort=split.sort()
    rearrange=sort.join("")
    obj[rearrange]=x
})
console.log(obj)