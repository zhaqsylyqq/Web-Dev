`Static methods = class methods`
class User {
  static staticMethod() {
    console.log(this === User); //use the entire CLass as this
  }
}

//We can replace static declaration with User.staticMethod = function() {...}

User.staticMethod();


class Article {
 
  static publisher = "Dude";

  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
 
  static createTodays() {
    return new this("Today's digest", new Date());
  }

  
}

console.log(Article.publisher); //class variables / static field / property ;
