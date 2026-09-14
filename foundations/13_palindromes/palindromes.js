const palindromes = function (string) {
  let lowercaseString = string.toLowerCase();

  let characters = lowercaseString.split("");

  let filteredCharacters = characters.filter(
    (character) =>
      !(
        character === " " ||
        character === "," ||
        character === "." ||
        character === "!"
      ),
  );

  let filteredString = filteredCharacters.join("");

  let reversedCharacters = filteredCharacters.toReversed();

  let reversedString = reversedCharacters.join("");

  if (filteredString === reversedString) {
    return true;
  } else {
    return false;
  }
};

palindromes("Racecar!");

// Do not edit below this line
module.exports = palindromes;
