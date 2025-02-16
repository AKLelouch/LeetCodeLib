const curry = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => curry(fn, ...args, ...args2);
  }
};

function add1(x, y, z) {
  return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
