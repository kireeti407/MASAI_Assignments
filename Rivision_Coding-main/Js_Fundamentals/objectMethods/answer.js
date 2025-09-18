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





