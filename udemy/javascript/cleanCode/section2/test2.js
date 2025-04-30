!null; // true
!!null; // false

null === false; // false

!null === true; // true

// null => math => 0
null + 123; // 123

// 선언했지만 값은 정의되지 않고 할당 X
let verb;
typeof verb; // undefined

verb + 10; // NaN

!undefined; // true

undefined == null; // true
undefined === null; // false
!undefined === !null; // true
