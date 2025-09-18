// By using the arrow function inside the function declarations

function Calculator () {
  this.total = 0;
  this.add = function (x) {
    this.total += x;
    return y => {
      this.total += y;
      return z => {
        this.total += z;
        return this.total;
      };
    };
  };
}
let calc = new Calculator ();
console.log (calc.add (5) (15) (10));// 30
