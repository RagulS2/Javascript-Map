//2.Write a function that takes an array of objects with a name property and returns a new array of strings with the name of each object capitalized. Use the Mapobject to accomplish this.
let str=[{name:'Ragul'},{name:'kishore'}]
let uppercase= str.map((e) => (e.name).toUpperCase())
 console.log(uppercase)