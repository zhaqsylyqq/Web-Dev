
//Function.prototype.defer = function util(delay) {
//  return (...args) => {setTimeout(this, delay, ...args)};
//} did not work for obj methods

Function.prototype.defer = function (delay) {

  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), delay);
  }
};



function f(a, b){
  console.log(a + b);
}

f.defer(1000)(10, 12);

let user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
}

user.sayHi = user.sayHi.defer(1000);
user.sayHi();
