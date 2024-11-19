function countVowels(sentence){
    vowels = sentence.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g); //Find vowels of full sentence, if not put '/g' only find the first vowel
    totalVowels = vowels ? vowels.length : 0;
    return totalVowels;
}

console.log(countVowels('hello my name is')); 
