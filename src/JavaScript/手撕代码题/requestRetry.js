function request(fn, maxRetry, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('超时');
    }, timeout);

    const inner = async () => {
      try {
        const res = await fn();
        resolve(res);
      } catch (e) {
        if (maxRetry-- > 0) {
          console.log('重试');
          inner();
        } else {
          reject(e);
        }
      }
    };

    inner();
  });
}

request;
