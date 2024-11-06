function countVowelsAndConsonants(text) {
    const vowels = 'aeiouAEIOU';
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }
    return { vowelsCount, consonantsCount };
}

const result = countVowelsAndConsonants("This is a simple sentence for counting vowels and consonants.");
console.log(result); 
