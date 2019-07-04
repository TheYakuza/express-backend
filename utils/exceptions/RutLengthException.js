const RutLengthException = (message) => {
  this.message = message;
  this.type = 'RutLengthException';
};

RutLengthException.prototype.toString = () => `${this.type}: ${this.message}`;

module.exports = RutLengthException;
