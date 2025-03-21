function removeDuplicates(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (!newNumbers.includes(numbers[i])) {
            newNumbers.push(numbers[i]);
        }
    }
    
    return newNumbers;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log(result);