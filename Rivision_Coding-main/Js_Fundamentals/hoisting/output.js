var data = 50;

function outer() {
  console.log("Outer data:", data);// Outer data: undefined
  var data = 100;

  function inner() {
    console.log("Inner data:", data); // Inner data: undefined
    var data = 200;

    function deep() {
      console.log("Deep data:", data); // 200
    }
    deep();
  }
  inner();
}

outer();


// output : 
// undefined
// undefined
// 200