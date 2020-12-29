const prefix = "23";
const high = 24565;
const low = 1;
const countNumsWithPrefix = require("./CountNumbersWithPrefixInRange")
console.log(countNumsWithPrefix.optimal(prefix, low, high))
console.log(countNumsWithPrefix.brute_force(prefix, low, high))