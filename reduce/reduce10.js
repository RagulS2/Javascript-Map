
let items = [
    { category: 'bat', quantity: 2, price: 500 },
    { category: 'bat', quantity: 1, price: 750 },
    { category: 'ball', quantity: 3, price: 50 }
  ];
  
  function calculateCategoryCosts(items) {
    let c = items.reduce((x, y) => {
      const cost = y.quantity * y.price;
      x[y.category] = (x[y.category] || 0) + cost;
      return x;
    }, {});
    console.log(c);
  }
  calculateCategoryCosts(items);
