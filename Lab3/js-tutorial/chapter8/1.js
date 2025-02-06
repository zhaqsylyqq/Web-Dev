'use strict';


let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

function noProto() {

  let start = Date.now();
  for (let i = 0; i < 100000000; i++){
    let value = pockets.glasses;
  }

  let end = Date.now();
  console.log('Finished in ', end-start, 'ms');
}

function withProto() {


  let start = Date.now();
  for (let i = 0; i < 100000000; i++){
    let value = head.glasses;
  }

  let end = Date.now();
  console.log('Finished in ', end-start, 'ms');
}

noProto();
withProto();


//console.log(pockets.pen);
//console.log(bed.glasses);
