`Getters and Setters - creating 'virtual' properties


2 type of properties: data and accessor prop

accessor properties have 4 descriptors:
1.get
2.set
3.enumerable
4.configurable

`

let vocaloid = {
  name: 'Miku',
  surname: 'Hatsune',

  get fullName () {
    return `${this.surname} ${this.name}`;
  },

  set fullName (value) {
    [this.name, this.surname] = value.split(' ');
  }
};

vocaloid.fullName = 'Megurine Luka';
console.log(vocaloid.name);
console.log(vocaloid.surname);

`Getters and Setters can be used to validate inputs for properties`

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

`Getters and Setters can be used for compatibility`
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age
