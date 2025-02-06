`Decorators and Forwarding`

//caching

function slow(x) {

  console.log(`Called with ${x}`)
  return x;
}

function cacheingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);
    return result;
  }
}

slow = cacheingDecorator(slow);
console.log(slow(1));
console.log(slow(1));


//caching using func.call() to pass the contexrt

let worker = {
  someMethod() {
    return 2;
  },

  slowMethod(x) {
    return x * this.someMethod();
  },


};

function cachingDecorator(func) {

  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func.call(this, x); //we can use func.call(this, ...arguments) if we have mult args
    cache.set(x, result);
    return result;
    
  };
}

worker.slowMethod = cachingDecorator(worker.slowMethod);
worker.slowMethod(2);
worker.slowMethod(2);

//func.apply() does the same but args are accepted as an array-like (with length property and indexing)


//method borrowing - here args is an iterable of arguments and we want to use an array method on them
function hash() {
  return [].join.call(arguments);
}

console.log(hash(1,2,3,4));
