function sumArray(numbers: number[]): number {
    let sum = 0;
  
    for (let number of numbers) {
      sum = sum + number;
    }
    return sum;
  }
  let inputArray = [1, 2, 3, 4, 5];
  let result = sumArray(inputArray);
  console.log(result);