let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  
  let cleanArr = arr;
  let map = new Map();
  
  for (word of cleanArr) {
    map.set(sortString(word), word);
  }

  return Array.from(map.values());
}

function sortString(str) {

  let arrayStr = Array.from(str.toLowerCase());
  arrayStr.sort();

  return arrayStr.join('');
}

console.log(aclean(arr));


