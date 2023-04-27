function isPrime(i) {
  count = 0;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 0) {
    return true;
  }
}

function getPrimeFactors(n) {
  let a = [];
  for (let i = 2; i <= n/2; i++) {
    if (isPrime(i) && n % i === 0) {
      a.push(i);
      n = n / i;
      i = 1;
      if (isPrime(n)) {
        a.push(n);
        break;
      }
    }
  }
  return a;
}

let array = [1, 2, 3, 4, 5,27,17];
array.map((e) => {
  let obj = {};
  if (isPrime(e)) {
    obj[e] = [e];
  } else {
    obj[e] = getPrimeFactors(e);
  }
  console.log(obj);
});