class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

let err = new FormatError('aaa');

console.log(err instanceof SyntaxError);

try {
  let n;
  n = 'abc';
  if (n.length < 4) {
    throw new FormatError('Value too short');
  } 
  
} catch (error) {
  if (error instanceof FormatError) {
    console.error(error.stack);
  }
  else {
    throw error;
  }
}
