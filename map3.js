//3.Write a function that takes an array of words and returns an object where the keys are the words and the values are the number of times each word appears in the array. Use the Mapobject to accomplish this

let strings=["Tl","tl","TL","tL","TL"]
let obj={}
 strings.map((x)=>{
   
    if(x in obj){
        // retu1rn obj[x] +=1    
        return obj[x] =obj[x]+1
    }
    else{
    return obj[x] =1
    }
 })
 console.log(obj)