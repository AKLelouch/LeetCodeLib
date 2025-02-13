var Trie = function () {
  this.isEnd = false;
  this.childrens = new Array(26);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this;
  for (let i = 0; i < word.length; i++) {
    // 遍历字符串
    let index = word[i].charCodeAt() - 'a'.charCodeAt();
    if (!current.childrens[index]) {
      // 当前节点的子节点不存在该字符
      current.childrens[index] = new Trie();
    }
    current = current.childrens[index];
  }
  current.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this;
  for (let i = 0; i < word.length; i++) {
    let index = word[i].charCodeAt() - 'a'.charCodeAt();
    if (!current.childrens[index]) {
      // 如果某一个字符不存在
      return false;
    }
    // 移动指针
    current = current.childrens[index];
  }
  return current.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this;
  for (let i = 0; i < prefix.length; i++) {
    let index = prefix[i].charCodeAt() - 'a'.charCodeAt();
    if (!current.childrens[index]) {
      // 如果某一个字符不存在
      return false;
    }
    // 移动指针
    current = current.childrens[index];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = new Trie();
trie.insert('apple');
trie.search('apple'); // 返回 True
trie.search('app'); // 返回 False
trie.startsWith('app'); // 返回 True
trie.insert('app');
trie.search('app'); // 返回 True
