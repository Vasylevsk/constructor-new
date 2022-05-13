function CreateCalculator(base) {
  this.result = base;
}

CreateCalculator.prototype.add = function (b) {
  return (this.result += b);
};

CreateCalculator.prototype.sub = function (b) {
  return (this.result -= b);
};

CreateCalculator.prototype.mult = function (b) {
  return (this.result *= b);
};

CreateCalculator.prototype.div = function (b) {
  return (this.result /= b);
};

CreateCalculator.prototype.set = function (b) {
  return (this.result = b);
};

const calc = new CreateCalculator(100);
