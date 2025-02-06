`
objetc -> bool = true
object -> str = when we alert objects
object -> number = when we add or use math functions

conversion hints:
1. "string" 
`
obj = {
  name: "Sam",
  age: 18
};


console.log(obj);

`
2. "number"
`
let num = Number(obj);  //explicit conversion
let n = +obj; //unary conversion

let date1 = Date("12.05.2021");
let date2 = Date("11.05.2021");

let delta = date1 - date2;
console.log(delta);


console.log(num); //for now return NaN

`
3. "default" - occurs when the operator is unsure what type to expect
Used with binary plus and equality signs
`

let obj1 = {};
let obj2 = {};

let total = obj1 + obj2;
if (obj1 == 0) {
  console.log("is 0");
}

