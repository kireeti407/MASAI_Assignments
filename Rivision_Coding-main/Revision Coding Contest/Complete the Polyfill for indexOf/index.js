if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        // Your code here to implement the indexOf polyfill
        var k;
        var len = this.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = fromIndex | 0;
        if (n >= len) {
            return -1;
        }
        for (k = n; k < len; k++) {
            if (this[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('grape'));  // -1