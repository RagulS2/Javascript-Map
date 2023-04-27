//6.Write a function that takes an array of objects with a nameand hobbiesproperty and returns a new array with only the objects where the hobbies include a given hobby. Use the filtermethod to accomplish this.

let arr=[{name:'Singaram',hobbies:'sighting'},
{name:'kishore',hobbies:'listenmusic'},
{name:'ponneelan',hobbies:'sighting'},]
function filterhobbies(arr){
let b=arr.filter((x)=>x.hobbies == 'sighting'  )
console.log(b)
}
filterhobbies(arr)

