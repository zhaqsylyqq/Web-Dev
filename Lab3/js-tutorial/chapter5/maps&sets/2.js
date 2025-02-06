`
Set - set of values where every value is unique

new Set([iterable])
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

`

let set = new Set([1,2,3,1,2,3,1,3]);

set.forEach(value => console.log(value));
console.log(set.entries());
