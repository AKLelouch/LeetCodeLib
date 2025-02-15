Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') return;
  const fnSymbol = Symbol('fnSymbol');
  Object.defineProperty(context, fnSymbol, {
    value: this,
    writable: false,
  });
  const res = context[fnSymbol](...args);
  delete context[fnSymbol];
  return res;
};

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') return;
  const fnSymbol = Symbol('fnSymbol');
  Object.defineProperty(context, fnSymbol, {
    value: this,
    writable: false,
  });
  const res = context[fnSymbol](...args);
  delete context[fnSymbol];
  return res;
};

Function.prototype.myBind = function (context, ...args1) {
  if (typeof this !== 'function') return;
  const fn = this;
  return function (...args2) {
    return fn.myCall(context, ...args1, ...args2);
  };
};
