`Named Class Expressions`
let User = class MyClass {
  sayHi() {
    console.log(MyClass);
  }
};

new User().sayHi();

`Class generators`
function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

User = makeClass("hello hello hello hello i walk awy i walk away");
let user = new User();
user.sayHi();

`Getters and Setters`
class Admin {

  data = "some text"; //adding a class field. does not belong to Admin.prototype

  constructor(name) { 
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name (value) {
    if (value.length < 4) {
      console.warn("Too short");
      return;
    }

    this._name = value;
  }

  ["say" + "Hi"]() { //this creates a method called sayHi() that belongs to Admin.prototype
    console.log("おはよう");
  }
}

let teto = new Admin("teto");
console.log(teto.name);
teto.sayHi();

`Binding functions
1. using bind()
2. passing a wrapper function (e.g. an arrow function)

For classes we can use class field as functions to save this
`

class Button {

  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  }
}

let b = new Button("A");
b.click();




