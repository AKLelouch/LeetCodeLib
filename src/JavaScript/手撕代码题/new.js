function myNew(constructor, ...args) {
  let obj = {};
  const result = constructor.apply(obj, args);
  obj.prototype = constructor.prototype;
  return (typeof result === 'object' && result !== null) || typeof result === 'function' ? result : obj;
}

export { myNew };
