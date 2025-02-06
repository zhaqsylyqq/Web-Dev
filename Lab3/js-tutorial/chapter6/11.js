function f(x) {
  console.log(x);
}


function delay(func, msDelay) {
    
  function wrapper() {
    
    setTimeout(() => func.apply(this, arguments), msDelay);
  }

  return wrapper; 
}

`
function delay(func, msDelay) {
    
  function wrapper(...args) {
    
    setTimeout(() => func.call(this, ...args), msDelay);
  }

  return wrapper; 
}

`

function debounce(func, msDelay) {
  
  let timeout;
  function wrapper() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.call(this, ...arguments), msDelay)
  }


  return wrapper;

}



let func = debounce(console.log, 1000);

func("a");
setTimeout( () => func("b"), 200);
setTimeout( () => func("c"), 500);
