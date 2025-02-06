`Functions as objects, NFE - named function expressions`

function sayHi() {
  console.log("Hi");
}
//name attribute
console.log(sayHi.name);

//length attribute - number of vars : ...rest is not counted
console.log(sayHi.length)

function makeCounter() {

  function counter() {

    return counter.count++;
  }

  counter.count = 0;

  counter.set = value => counter.count = value;
  counter.decrease = () => counter.count--;

  return counter;
}

let a = makeCounter();
console.log(a());
console.log(a());
a.set(6);
console.log(a.count);


//the nfe allows us to create a constant name for a function 
//to access it inside of the function itself

function sum(a) {

  let currentSum = a;

  function util(x) {
    currentSum += x;
    return util;
  } 

  util.toString = function() {
    return currentSum;
  };

  return util;
}

console.log(String(sum(4)(1)(2)(3)));
