let strings=['Ragul','Nethaji','kishore','singaram']


function findLongestString(strings) {
    const longestString = strings.reduce((x, y) => {
      return y.length > x.length ? y : x;
    }, "");
    console.log (longestString);
  }
  findLongestString(strings)