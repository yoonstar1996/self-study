function Exam() {
  this.kor = 1;
  this.eng = 2;
  this.math = 3;

  // console.log(kor, eng, math);
  // console.log("this", this.kor, this.eng, this.math);
  // console.log("global", global.kor, global.eng, global.math);
}

{
  let arr1 = [];
  console.log(arr1.aaaa());

  Array.prototype.aaaa = function () {
    console.log("aaaa");
  };

  let arr2 = [];
  console.log(arr2.aaaa());
}
