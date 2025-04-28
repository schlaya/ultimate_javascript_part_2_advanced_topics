let x = {};
// y and x have the same objectBase
let y = {};

Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
