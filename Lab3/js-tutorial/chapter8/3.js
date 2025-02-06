`everything is inherited from object's prototype`

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true


`borrowing methods`

let arrayLike = {
  0: 'miku',
  1: 'teto',
  2: 'the yellow one',
  length: 3,
};

arrayLike.join = Array.prototype.join;

console.log(arrayLike.join(', '));
