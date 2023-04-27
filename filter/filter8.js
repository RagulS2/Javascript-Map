//8.Write a function that takes an array of objects with a dateproperty and returns a new array with only the objects where the date is within a given range. Use the filtermethod to accomplish this.


// let details=[{name:'Ragul',doj:'2023-03-03'},
// {name:'yc',doj:'2022-06-01'},
// {name:'prakash',doj:'2018-01-02'}]

//    function checkRange(details){
//    let startDate=new Date('2022-01-01');
//    let endDate=new Date('2024-01-01');
  
//    let b=details.filter((x)=> {
//     const date = new Date(x.doj);
//     return ((date >= (startDate) )&& (date <= (endDate)))
//    }
//    )
//     console.log(b)
// }
// checkRange(details)


let details = [
    { name: 'Ragul', doj: '2023-03-03' },
    { name: 'yc', doj: '2022-06-01' },
    { name: 'prakash', doj: '2018-01-02' },
    { name: 'netha', doj: '2022-01-02' }
  ];
  
  function checkRange(details) {
    let startDate = new Date('2022-01-01');
    let endDate = new Date('2024-01-01');
  
    let b = details.filter(x => {
      const date = new Date(x.doj);
      console.log(date)
     return date >= startDate && date <= endDate;
    })
  
    console.log(b);
  }
  
  checkRange(details);
