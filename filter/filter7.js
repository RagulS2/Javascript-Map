// 7.Write a function that takes an array of objects with a nameand gradesproperty and returns a new array with only the objects where the average grade is greater than a given amount. Use the filtermethod to accomplish this.

let marks=[{name:'ragul',grade:90.1},{name:'marudhu',grade:99.9},{name:'netha',grade:89.9}]

function avgGrade(marks){
    let b=marks.filter((x)=>x.grade > 90.0)
    console.log(b) 
}
avgGrade(marks)
