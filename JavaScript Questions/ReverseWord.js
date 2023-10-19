function reverseWords(sentence) {
    // Split the sentence into words based on spaces
    let words = sentence.split(' ');

    // Initialize an array to store the reversed words
    let reversedWords = [];

    // Iterate through the words, reverse each word, and add it to the reversedWords array
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = '';

        // Reverse the word character by character
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        reversedWords.push(reversedWord);
    }

    // Join the reversed words to form the final reversed sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}


const inputSentence = "Hello World";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "olleH dlroW"
