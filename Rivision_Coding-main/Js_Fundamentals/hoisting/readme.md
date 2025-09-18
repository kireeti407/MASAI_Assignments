Problem : 

var data = 50;

function outer() {
  console.log("Outer data:", data);
  var data = 100;

  function inner() {
    console.log("Inner data:", data);
    var data = 200;

    function deep() {
      console.log("Deep data:", data);
    }
    deep();
  }
  inner();
}

outer();



Explanation :

First console : 
We consoling the data in the outer function before data varible is initialied , but after that we initialised data varibale with var kayword , so it it hosited with undefined in the memory phase.
so that we get undefined at the first console.

Second Console:
We consoling the data in the  inner function before data varible is initialied , but after that we initialised data varibale with var kayword , so it it hosited with undefined in the memory phase.
so that we get undefined at the second console.

Third Console : 
We consoling the data variable in the deep function but there is no varible in the memory phase of deep function , so it will choose the nearest varibles to console. So , We declared data varible in the inner function with var keyword . So deep function will able to access it . 
So that we get 200 at the third console.

Output : 
Outer data: undefined 
Inner data: undefined 
Deep data: 200