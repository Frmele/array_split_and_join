'use strict';

const thingsToBuy = [
  "paint",
  "sand paper",
  "brushes",
  "wallpaper stripper",
  "paint roller",
  "sand paper"
];
console.table(thingsToBuy);


////////////////////////////////////////////////////////////////////////////////////
console.log("----------- includes ------------------");
// includes tells us if the given value exists in the array
console.log(thingsToBuy.includes("paint")); // true
console.log(thingsToBuy.includes("music")); // false


////////////////////////////////////////////////////////////////////////////////////
console.log("----------- indexOf ------------------");
// indexOf gives us the index of the *first* occurrence of the given value
console.log(thingsToBuy.indexOf("brushes")); // 2
console.log(thingsToBuy.indexOf("sand paper")); // 1 (not 5!)