function printEvenReverse(n) {
    let numbers = [];
  
    for (let i = n; i >= 1; i--) {
      if (i % 2 === 0) {
        numbers.push(i);
      }
    }
  
    numbers.forEach((e) => {
      console.log(e);
    });
  }
  
  printEvenReverse(20);