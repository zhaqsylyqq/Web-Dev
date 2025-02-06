function printNumbers(from, to) {
  
  let num = from;
  let timerId = setInterval(() => {
    console.log(num++); 
    if (num > to) {
      clearInterval(timerId)
    }
  }, 1000);

} 

function printNumbersTimeouts(from, to) {

  let num = from;

  let timerId = setTimeout(function printNum() {
    console.log(num);
    if (num < to) {
      setTimeout(printNum, 1000);
    }
    num++;
  }, 1000);

} 

printNumbersTimeouts(0, 4);
