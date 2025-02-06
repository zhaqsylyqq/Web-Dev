`
Maps - like Objects but 1)allows any type for keys, 2)keeps order of key-value pairs

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
`

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get(1) == map.get("1")); // false


keys = map.keys();
values = map.values();
items = map.entries();

let obj = {
  name : "John",
  age: 30,
}

let mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj);

let objFromMap = Object.fromEntries(items);
console.log(objFromMap);


mapFromObj.forEach((value, key) => {
  console.log(`${key} : ${value}`);
})
