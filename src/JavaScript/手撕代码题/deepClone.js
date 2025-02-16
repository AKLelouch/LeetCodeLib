function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 如果有已创建对象，则直接取出
  if (hash.has(obj)) return hash.get(obj);
  const cloneObj = new obj.constructor();

  // 已创建的对象存储起来
  hash.set(obj, cloneObj);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}

// 浅拷贝
const obj1 = {
  name: 'init',
  arr: [1, [2, 3], 4],
};
const obj3 = deepClone(obj1); // 一个浅拷贝方法
obj3.name = 'update';
obj3.arr[1] = [5, 6, 7]; // 新旧对象还是共享同一块内存

console.log('obj1', obj1); // obj1 { name: 'init',  arr: [ 1, [ 5, 6, 7 ], 4 ] }
console.log('obj3', obj3); // obj3 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }
