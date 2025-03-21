function countWordOccurrences(sentence: string, word: string): number {
    let lowerCaseSentence = sentence.toLowerCase();
    
    let lowerCaseWord = word.toLowerCase();
    
    let words = lowerCaseSentence.split(" ");
    
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === lowerCaseWord) {
            count = count + 1;
        }
    }
    
    return count;
}

let mySentence = "I love typescript and I love coding in TypeScript";
let myWord = "typescript";
let occurrences = countWordOccurrences(mySentence, myWord);

console.log(occurrences);