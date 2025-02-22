const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';
class MyPromise {
  constructor(executor) {
    const self = this;
    self.status = PENDING;
    self.value = null;
    self.onResolved = [];
    self.onRejected = [];
    function resolve(value) {
      if (self.status === PENDING) {
        self.status = FULLFILLED;
        self.value = value;
        self.onResolved.forEach(fn => fn());
      }
    }
    function reject(reason) {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.value = reason;
        self.onRejected.forEach(fn => fn());
      }
    }
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFullfilled, onRejected) {
    // 给then函数默认赋值
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : reason => {
            throw reason;
          };
    const self = this;
    const innerPromise = new MyPromise((resolve, reject) => {
      const handlerCallback = (callback, data) => {
        setTimeout(() => {
          try {
            const result = callback(data);
            resolvePromise(innerPromise, result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      };

      if (self.status === PENDING) {
        self.onResolved.push(handlerCallback.bind(self, onFullfilled, self.value));
        self.onRejected.push(handlerCallback.bind(self, onRejected, self.value));
      } else if (self.status === FULLFILLED) {
        handlerCallback(onFullfilled, self.value);
      } else if (self.status === REJECTED) {
        handlerCallback(onRejected, self.value);
      }
    });
    return innerPromise;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    return this.then(
      value => MyPromise.resolve(onFinally()).then(() => value),
      reason => MyPromise.resolve(onFinally()).then(() => reason),
    );
  }

  static resolve(result) {
    if (result instanceof MyPromise) return result;
    if ((typeof result === 'object' && result) || typeof result === 'function') {
      // 如果result是一个thenable对象
      try {
        let then = result.then;
        if (typeof then === 'function') {
          // 调用thenable对象result的then方法，传入resolve和reject，其会在result状态改变时调用
          return new MyPromise(then.bind(result));
        }
      } catch (e) {
        return new MyPromise((resolve, reject) => reject(e));
      }
    }

    return new MyPromise(resolve => resolve(result));
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    // 只要有一个被拒绝，则直接返回被拒绝的新promise
    // 当所有promise都被兑现，则返回被兑现的新promise
    const values = [];
    let resolvedCount = 0;
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        let then = promise.then;
        if ((then && typeof then == 'object') || typeof then === 'function') {
          then(
            result => {
              // 当所有promise都被兑现，则返回被兑现的新promise
              resolvedCount++;
              values[index] = result;
              if (resolvedCount === promises.length) {
                resolve(values);
              }
            },
            reason => {
              // 只要有一个被拒绝，则直接返回被拒绝的新promise
              reject(reason);
            },
          );
        } else {
          resolvedCount++;
          values[index] = promise;
          if (resolvedCount === promises.length) {
            resolve(values);
          }
        }
      });
    });
  }

  static allSettled(promises) {
    // 只有所有promise都敲定，返回的promise才会被兑现，返回的值是所有promise的结果
    let values = [];
    let settledCount = 0;
    const innerPromise = new MyPromise(resolve => {
      promises.forEach((promise, index) => {
        let then = promise.then;
        if ((then && typeof then == 'object') || typeof then === 'function') {
          then(
            result => {
              values[index] = {
                status: FULLFILLED,
                value: result,
              };
              settledCount++;
              if (settledCount === promises.length) resolve(values);
            },
            reason => {
              values[index] = {
                status: REJECTED,
                value: reason,
              };
              settledCount++;
              if (settledCount === promises.length) resolve(values);
            },
          );
        } else {
          settledCount++;
          values[index] = {
            status: FULLFILLED,
            value: promise,
          };
          if (settledCount === promises.length) {
            resolve(values);
          }
        }
      });
    });
    return innerPromise;
  }

  static any(promises) {
    // 如果任意一个promise都被兑现，则返回被兑现的值
    // 如果所有promise都被拒绝，则返回一个原因数组
    let reasonArr = [];
    let rejectCount = 0;
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        let then = promise.then;
        if ((then && typeof then == 'object') || typeof then === 'function') {
          then(
            result => {
              resolve(result);
            },
            reason => {
              reasonArr[index] = reason;
              rejectCount++;
              if (rejectCount === promises.length) reject(reasonArr);
            },
          );
        } else {
          resolve(promise);
        }
      });
    });
  }

  static race(promises) {
    // 返回的promise值由第一个被敲定的promise决定
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        let then = promise.then;
        if ((then && typeof then == 'object') || typeof then === 'function') {
          then(
            result => {
              resolve(result);
            },
            reason => {
              reject(reason);
            },
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
}

function resolvePromise(innerPromise, result, resolve, reject) {
  if (innerPromise === result) {
    reject(new TypeError('Chaining Cycle'));
  }

  if ((result && typeof result === 'object') || typeof result == 'function') {
    // 加锁防止循环调用
    let used;
    try {
      let then = result.then;
      if (typeof then === 'function') {
        // 实现onFullfilled和onRejected中返回promise时，执行链式调用
        then.call(
          result,
          value => {
            resolvePromise(result, value, resolve, reject);
          },
          reason => {
            if (used) return;
            used = true;
            reject(reason);
          },
        );
      } else {
        if (used) return;
        used = true;
        resolve(result);
      }
    } catch (e) {
      if (used) return;
      used = true;
      reject(e);
    }
  } else {
    resolve(result);
  }
}

const p = new MyPromise(reslove => {
  console.log(1);
  reslove(2);
});

p.then(
  val => {
    console.log('then1', val);
    return 3;
  },
  reason => {
    console.log(reason);
  },
).then(val => {
  console.log('then2', val);
});

export { MyPromise };
