function f(a) {
  console.log(a);
}

function throttle(func, ms) {

  let isThrottled = false, 
    savedArgs,
    savedThis;
  
  function wrapper() {

    if(isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    isThrottled = true;

    func.apply(this, arguments);
    
    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
      }
    }, ms); 
  }

  return wrapper;
}

f = throttle(f, 1000);

f(1);
f(2);
f(3);
