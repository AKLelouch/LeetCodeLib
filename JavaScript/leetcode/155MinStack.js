var MinStack = function () {
  this.stack = [];
  this.minPos = -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  // 更新最小值位置
  if (this.minPos === -1) {
    this.minPos = 0;
  } else {
    this.minPos =
      val < this.stack[this.minPos] ? this.stack.length - 1 : this.minPos;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.minPos === -1) {
    return null;
  }
  const popNum = this.stack.pop();
  if (this.stack.length === 0) {
    this.minPos = -1;
  } else if (this.minPos === this.stack.length) {
    // 找到最小数
    let newMinPos = 0;
    for (let i = 1; i < this.stack.length - 1; i++) {
      if (this.stack[i] < this.stack[newMinPos]) newMinPos = i;
    }
    this.minPos = newMinPos;
  }
  return popNum;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.minPos];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
