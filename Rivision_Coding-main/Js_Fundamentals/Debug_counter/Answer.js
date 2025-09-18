const obj = {
  name: "Counter",
  count: 0,
  start: function () {
    console.log(this.name + " started");
    for (let i = 0; i < 3; i++) {
      setTimeout(()=>{
        this.count++ 
        console.log(`Count:${this.count}`)
      }, i * 500);
    }
  }
};

obj.start();

// Output : 
// Counter Started 
// Count:1
// Count:2
// Count:3
