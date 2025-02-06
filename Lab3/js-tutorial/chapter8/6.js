`
Modern prototype methods

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.


`


let vocaloid = {
  sings: true
};

//inheriting vocaloid using create and adding properties with their descriptors
let rin = Object.create(vocaloid, 
  {
    name : {
      value: 'Rin',
      writeable: true,
      configurable: true,
      enumerable: true
    }, 
    age : {
      value: 14,
      writeable: true,
      configurable: false,
      enumerable: true
    },
    canonicalRelationships : {
      value: null,
      writable: true,
      configurable: false,
      enumerable: false
    }
  }
)

let rinClone = Object.create(Object.getPrototypeOf(rin), Object.getOwnPropertyDescriptors(rin));
console.log(rin);
console.log(rinClone);
console.log('Are they exactly the same?', rin === rinClone);
console.log('Do they have the same content?', JSON.stringify(rin) === JSON.stringify(rinClone));

//if we for some reason want to use __proto__ as a name of a property in an object
//we should use Object.create(null)
let obj = Object.create(null); //object with no prototype, hence we can use __proto as a key
obj['__proto__'] = 'alfkmas;dlfkadf';
console.log(obj.__proto__);
