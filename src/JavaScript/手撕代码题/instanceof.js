/**
 * instanceof的用法是： 实例A instanceof 原型B， 如果B在A的原型链上，则表达式为true，否则为false。
实例的原型是指定在实例的_proto属性上的，可以用A._proto进行访问。
原型则是绑定在原型对象的prototype属性上的，可以用B.prototye进行访问。
 */
function myInstanceof(obj1, obj2) {
  if (!obj1 || !obj2) return false;
  let proto = obj1.__proto__;
  while (proto) {
    if (proto === obj2.prototype) {
      return true;
    } else {
      proto = proto.__proto__;
    }
  }
  return false;
}

console.log(myInstanceof([], Function));
