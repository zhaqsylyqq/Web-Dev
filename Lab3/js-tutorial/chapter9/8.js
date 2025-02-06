`Checking for instance`
//Built-ins
arr = [1,2,3]
console.log(arr instanceof Array);
console.log(arr instanceof Object); //both true because Array inherits from Object


//Functions
function User(name) {
  this.name = name;
}

let rin = new User('rin');
console.log(rin instanceof User); //also true

//Regular classes
class Vocaloid extends User {

  constructor(name, bpm) {
    super(name);
    this.bpm = bpm;
  }

}

miku = new Vocaloid('miku', 220);
console.log(miku instanceof Vocaloid);
console.log(miku instanceof User); //both true as well

`When considering instanceof JS only looks at Class.prototype not at the actual Class.
So if a protoype of a class is changed before calling isinstance there might be a mistake`
 
function UTAU(name) {
  this.name = name;
}

teto = new UTAU('teto');
console.log(teto.name);

UTAU.prototype = {};
console.log(teto instanceof UTAU); //false bc the prototype of UTAU is now just an empty object
//this type of prikol appears only with constructor functions not with Regular classes
