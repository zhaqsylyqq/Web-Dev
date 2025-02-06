//adding a method to all functions called defer that pauses the execution for 1 secomd
Function.prototype.defer = function() {
  setTimeout(this, 1000);
}

function f() {
  console.log('aaaaaaaaaaaaaaaaaa');
}

f.defer();
