// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomLetters() {
    let randomNumber = getRandomInteger(5, 26);
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let result = " ";
    for (let i = 0; i <= randomNumber; i++) {
result += letters.charAt(getRandomInteger(0, 25));
    }
 return result;
}
console.log(getRandomLetters());
