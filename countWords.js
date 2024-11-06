function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(Boolean).length;
}

console.log(countWords("This is a sample paragraph with multiple words.")); 