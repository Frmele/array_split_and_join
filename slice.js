'use strict';

const thingsToBuy = ["paint", "sand paper", "brushes", "wallpaper stripper", "paint roller"];
console.table(thingsToBuy);

// Slicing an array is very similar to slicing a string.

// Slice with one index: from index X to the end.
console.log(thingsToBuy.slice(3)); // [ 'wallpaper stripper', 'paint roller']
// Slicing does NOT change the original array.
console.log(thingsToBuy); // ["paint", "sand paper", "brushes", "wallpaper stripper", "paint roller"]

// Slice with two indexes: from index X up to but not including Y.
console.log(thingsToBuy.slice(1,3)); // [ 'sand paper', 'brushes']

// We can even use negative indexes to select the last X values in an array.
// You can think of this number as "length - x".
// So the index for -2 is equal to length - 2, which is 3 in this case.
console.log(thingsToBuy.slice(-2)); // [ 'wallpaper stripper', 'paint roller']

// Start at -2, stop before 4
console.log(thingsToBuy.slice(-3, 4)); // [ 'brushes', 'wallpaper stripper' ]