'use strict';

let numbers = [4, 5, 6, 1, 2, 3, 9, 8, 7];

////////////////////////////////////////////////////////////////////////////////////
console.log("----------- sorting ------------------");
// sort does 2 things:
// 1. It sorts the original array (the order is updated).
// 2. The resulting value is also the sorted array.

// Most of the times you'll want to do this
console.log(numbers); // [ 4, 5, 6, 1, 2, 3, 9, 8, 7 ]
numbers.sort();
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// This also works, but it's less explicit that the original array is also changed.
numbers = [4, 5, 6, 1, 2, 3, 9, 8, 7];
console.log(numbers); // [ 4, 5, 6, 1, 2, 3, 9, 8, 7 ]
const sortedNumbers = numbers.sort();
console.log(sortedNumbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// Sorting an array of strings also works
let thingsToDiscuss = ["colors", "who does what", "budget", "sand paper"];
console.log(thingsToDiscuss); // [ 'colors', 'who does what', 'budget', 'sand paper' ]
thingsToDiscuss.sort();
console.log(thingsToDiscuss); // [ 'budget', 'colors', 'sand paper', 'who does what' ]

// ⚠️ But be aware of uppercase and lowercase characters
thingsToDiscuss = ["colors", "Who does what", "budget", "Sand paper"];
console.log(thingsToDiscuss); // [ 'colors', 'Who does what', 'budget', 'Sand paper' ]
thingsToDiscuss.sort();
// Uppercase letters come before lowercase letters.
console.log(thingsToDiscuss); // [ 'Sand paper', 'Who does what', 'budget', 'colors' ]


////////////////////////////////////////////////////////////////////////////////////
console.log("----------- reverse ------------------");
// reverse does 2 things:
// 1. It reverses the original array (the order is updated).
// 2. The resulting value is also the reversed array.
numbers = [5, 6, 7];

// Most of the times you'll want to do this
console.log(numbers); // [ 5, 6, 7 ]
numbers.reverse();
console.log(numbers); // [ 7, 6, 5 ]

// This also works, but it's less explicit that the original array is also changed.
numbers = [7, 9, 2];
console.log(numbers); // [ 7, 9, 2 ]
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // [ 2, 9, 7 ]
console.log(numbers); // [ 2, 9, 7 ]