let str=['amma','appa','ragul','mam']
function toCheck(str){
    let obj=[]
 str.filter((x)=>{
 palindrome=x.split('').reverse().join('')
 if(x.includes(palindrome)){
  obj.push(x)
}
})
console.log(obj)
}
toCheck(str)

