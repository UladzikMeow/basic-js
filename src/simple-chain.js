const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('( )');
      return this;
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position >= this.chain.length || position <= 0 || isNaN(position)) {
      this.chain = [];
      throw 'Error';
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
