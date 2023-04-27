//4.Write a function that takes an array of objects with a categoryproperty and returns a new array with only the unique categories. Use the filterand mapmethods to accomplish this.

let bike = [
    { bname: 'Dio', cmpy: 'Honda' },
    { bname: 'SuzukiAccess', cmpy: 'Suzuki' },
    { bname: 'Activa', cmpy: 'Honda' },
    {bname: 'Activa', cmpy: 'jupiter' }]


function unique(bike) {
    let obj=[]
    bike.filter((x) =>{
        if(!(obj.includes(x.cmpy))){
       obj.push(x.cmpy)
    }

})
console.log(obj)
  
}

unique(bike)