Problem :
const user = {
  name: "Alice",
  printName: () => {
    console.log(this.name); // undefined
  },
  printName2: function () {
    console.log(this.name); // Alice
  }
};

user.printName();
user.printName2();

 
 Solution / Fix :
 const user = {
  name: "Alice",
  printName: function()  {
    console.log(this.name); // Alice
  },
  printName2: function () {
    console.log(this.name); // Alice
  }
};

user.printName();
user.printName2();

Explanation :
1 . We can't able to use arrow functions as a object methods , because arrow function will not have theor own this property. 
2 . Instead of using arrow functions we can use normal functions as a objects methods



