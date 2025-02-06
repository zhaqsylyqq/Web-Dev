`Rest and Spread

Rest - using ...varName to store every argument that is not name in an array

Spread - like asterisk in Python, returns an iterable of elements
Spread ca be used to merge and sort aray, sort objects`

function sumAll(...rest) {

  let res = 0;
  for (let val of rest) {
    res = res +val;
  }
  return res;
}

console.log(sumAll(1,3,4,6,3,2))

function showStuff() {

  console.log(arguments.length);
  for (let index = 0; index < arguments.length; index++) {
    console.log(arguments[index]);
  }
}

showStuff("sussy", "baka");

let arr1 = [1,3,5,6]
let arr2 = [3,234,6,3,2,25]

let arr = [100, ...arr1, 400, ...arr2]
console.log(arr);
