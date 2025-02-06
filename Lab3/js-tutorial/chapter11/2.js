let promise1 = new Promise(function(resolve, reject) {
  //some actions
}); 
//The function passed to new Promise is called the executor.
//When new Promise is created, the executor runs automatically

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
})

let promise3 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("nope"), 1000);
}).catch(
  (error) => console.error(error)
)

//Consumers subs;

promise1.then(
  (result) => console.log(result),
  (error) => console.error(error)
);


