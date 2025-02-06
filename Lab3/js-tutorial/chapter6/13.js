`Not losing this in function calls`

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

//1st approach:
// setTimeout(() => user.sayHi(), 1000);  if the method is changed, the changed version is executed

//2nd approach - use bind
let sayHi = user.sayHi.bind(user);

sayHi();
