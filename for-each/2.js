function printEvenNumbers(n) {
    let evennumbers=[]
    for (let i = 1; i <= n; i ++) {
        if(i%2==0){
            evennumbers.push(i)
    }
}
    evennumbers.forEach(e => {
        console.log(e)
    })
  }
  
  printEvenNumbers(20)