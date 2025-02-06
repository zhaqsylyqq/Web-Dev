`Mixins`

//Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

// mixin
let sayHiMixin = {
  //object with some useful methods
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods - assign them to the prototype of the Class (where all of the methods go)
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
