`setTimeout, setInterval`

function doSomething(x) {
  console.log(x);
}

function hello() {
  console.log("Hello");
}

let varX = 3;
let timerId = setTimeout(doSomething, 1000, varX); //just a timed function 

if (varX == 2) {
  clearTimeout(timerId);  //using clearTimeout to cancel a timed function
} 


let timerId2 = setInterval(hello, 2000);
setTimeout(() => {clearInterval(timerId2); console.log("stop")}, 5000); //using interval to activate a function every x ms 


// using nested timeouts to recursively call a function after every x ms
let timerId3 = setTimeout(function hello() {console.log('hello'); timerId3 = setTimeout(hello, 2000)}, 2000);

// the difference is that the time interval in nested timeouts is counted from the end of the funciton execution
// whereas in setInterval() is counted from the start of the function executrion including the execution time of the function
// meanign that it is possible for a function to take the entire time interval and start executing immediately


