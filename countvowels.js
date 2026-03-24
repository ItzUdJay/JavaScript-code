function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    str = str.toLowerCase(); 

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}