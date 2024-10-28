type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 29, "as-number");
console.log(combinedAges); // 59

const combinedStringAges = combine("30", "29", "as-number");
console.log(combinedStringAges); // 3029

const combinedNames = combine("Yoon", "star", "as-text");
console.log(combinedNames); // Yoonstar
