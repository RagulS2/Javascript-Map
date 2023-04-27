const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
function addArrays(array1, array2) {
    const result = [];
    array1.forEach((num, index) => {
      result.push(num + array2[index]);

    });
   
    console.log(result)
  }
  addArrays(array1, array2)