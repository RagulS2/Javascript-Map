//7.Write a function that takes an array of numbers and returns an object where the keys are the numbers and the values are arrays of theirprime factors. Use the Mapobject to accomplish this.

let num=[1,2,3,4,5]
let obj={}
num.map((e) =>{
    if(!(e in obj)){
        obj[e]=[]
    }
    for(i=1;i<=e;i++){
        if(e%i==0){
            obj[e].push(i)
        }
    }
})
console.log(obj)