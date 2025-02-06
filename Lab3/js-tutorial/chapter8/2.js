`Prototypical inheritance of objects`

//using __proto
let animal = {
  eats: true
};

let rabbit = {
  __proto__ : animal,
  name: 'Xinxis'
};

console.log(rabbit.eats);

//using F.prototype

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;

let howard = new Rabbit('howard');
console.log(howard.eats);
