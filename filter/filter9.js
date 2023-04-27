let arr=[
    {name:'Ragul',mail:'sragul11@gamil.com'},
    {name:'aravi',mail:'yoyo@gamil.com'},
    {name:'boss',mail:'boss@finstein.ai'},
    {name:'netha',mail:'netha@yahoo.com'}
]
function checkDomain(arr){
let b=arr.filter((x)=> (x.mail).includes('.com'))
console.log(b)
}
checkDomain(arr)
