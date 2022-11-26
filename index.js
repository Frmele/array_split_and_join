'use strict';

const personName = "Johnetta Elzie";

////////////////////////////////////////////////////////////////////////////////////
console.log("----------- splitting a string ------------------");
// If we "split" a string we cut at every occurrence of the given string.
// The character we split on is *not* part of the result.
// The result is an array of the string.
console.log(personName.split(" ")); // ["Johnetta", "Elzie"]

// We can split on other characters as well.
// Do you see that the "z" is not in the array?
console.log(personName.split("z")); // [ 'Johnetta El', 'ie' ]

// Splitting is case sensitive, "e" is not the same as "E"
// (do you see the space after 'Johnetta' ?)
console.log(personName.split("E")); // [ 'Johnetta ', 'lzie' ]
console.log(personName.split("e")); // [ 'John', 'tta Elzi', '' ]
// In this last example you see that we get an empty string at the end.
// That's because the character we searched for was the last character.

// We can split on multiple characters as well
console.log(personName.split("El")); // [ 'Johnetta ', 'zie' ]

// If the character is not found we get a 1-item array with the original string
console.log(personName.split("x")); // [ 'Johnetta Elzie' ]

// If we split an empty string we *also* get a 1-item array with
// the original string, which is an empty string.
console.log("".split('x')); // ['']


////////////////////////////////////////////////////////////////////////////////////
console.log("----------- joining an array of strings ------------------");
// This operation is the reverse operation of splitting. Think of it as glueing.
// 1. Take an array of strings.
// 2. We glue them together.
// 3. We use the given string as the glue character or characters.
const wordsOfChant = ["No", "Justice", "No", "Peace"];

// If we join and give no string we glue with a "," in between as the default.
console.log(wordsOfChant.join()); // "NoJusticeNoPeace"

// If we join and give a string we glue with that string in between.
console.log(wordsOfChant.join("!")); // "No!Justice!No!Peace"

// Very useful when you want to construct a sentence: we use a space.
console.log(wordsOfChant.join(" ")); // "No Justice No Peace"

// And we can pass more than one character too.
console.log(wordsOfChant.join("! ")); // "No! Justice! No! Peace"