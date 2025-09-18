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

