//'use strict';

`Object properties:
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
`

//a usual object with all of the properties set to true
let miku = {
  name: "Miku",
  age: 16
};

let descMiku = Object.getOwnPropertyDescriptor(miku, 'name');
//json representation of this object
console.log(JSON.stringify(descMiku, null, 2));



//an empty object
let rin = {};
Object.defineProperty(rin, 'name', {value: 'Rin'});  //defining its properties

let descRin = Object.getOwnPropertyDescriptor(rin, 'name');
//as a result we get an object with all 3 properties set to fasle
console.log(JSON.stringify(descRin, null, 2));
rin.name = 'Len'; //<--- does not work in strict mode, an error is raised


let len = {};
Object.defineProperties(len, { 
  name : {value : 'Len', writable : false, configurable : false, enumerable : true}, //cannot be modified at all
  age : {value : 'unknown', writable : true, configurable : true, enumerable : false},  //does not appear in for loops or keys
  item : {value : 'banana', writable : true, configurable : false, enumerable : true}
}) //can be changed but not reconfigured

let descLen = Object.getOwnPropertyDescriptors(len);
let JSONLen = JSON.stringify(descLen, null, 2); 
console.log(JSONLen);

//copying an object with all of its properties' descriptors
let lenClone = Object.defineProperties({}, descLen);
let descLenClone = Object.getOwnPropertyDescriptors(lenClone);
let JSONLenClone = JSON.stringify(descLenClone, null, 2);
console.log(JSONLen === JSONLenClone); //true
