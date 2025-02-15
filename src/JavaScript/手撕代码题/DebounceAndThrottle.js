const debounce = (fn, timeout) => {
  let timer = null;
  return function () {
    const context = this;
    let args = arguments;
    if (timer) {
      // 重置执行
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      fn.apply(context, args);
    }, timeout);
  };
};

const throttle = (fn, timeout) => {
  let lastTime = null;
  return function () {
    const context = this;
    let args = arguments;
    const currentTime = Date.now();
    if (!lastTime || currentTime - lastTime >= timeout) {
      lastTime = currentTime;
      fn.apply(context, args);
    }
  };
};

let fn = (i, type) => {
  console.log(i, type);
};

let debounceFn = debounce(fn, 1000);
let throttleFn = throttle(fn, 10);
for (let i = 0; i < 10000; i++) debounceFn(i, 'debounce');

for (let i = 0; i < 1000000; i++) throttleFn(i, 'throttle');
