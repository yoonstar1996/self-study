"1" == 1; // true
1 == true; // true

"1" === 1; // false
1 === true; // false

"1" == 1; // 느슨한 검사 => 형 변환
11 + "문자와 결합"; // "11문자와 결합"
!!"문자열"; // true
!!""; // false
parseInt("9.999", 10); // 9

Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.isInteger(123); // true
Number.isInteger(123.456); // false

typeof 123 === "number"; // true
isNaN(123); // false
isNaN(123 + "테스트"); // true
Number.isNaN(123 + "테스트"); // false
