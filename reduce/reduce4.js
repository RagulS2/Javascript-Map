let items=[{quantity:2,price:10},
    {quantity:1,price:20},
    {quantity:3,price:3.3}]

    function toFindTotalCost(items){
    let totalcost=items.reduce((x,y)=>{
       return x+(y.quantity * y.price)
    },0)
    console.log(totalcost)
}
toFindTotalCost(items)
