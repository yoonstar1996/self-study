var global = 0;

function outer() {
  console.log(global); // undefined
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();

  global = 1;

  console.log(global); // 1
}

outer();

function duplicatedVar() {
  var a;

  console.log(a); // undefined

  var a = 100;

  console.log(a); // 100
}

duplicatedVar();

var sum;

sum = function () {
  return 1 + 2;
};

console.log(sum); // 3
