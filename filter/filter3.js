//3.Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given amount. Use the filtermethod to accomplish this
let arr=['Ragul','Aravindh','Kishore','Raja']
function strlength(arr,glength){
final=arr.filter((x)=> x.length>glength)
console.log(final)
}
strlength(arr,4)
