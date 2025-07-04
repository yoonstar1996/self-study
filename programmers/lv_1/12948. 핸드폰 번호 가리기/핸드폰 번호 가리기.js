function solution(phone_number) {
  var answer = "";

  phone_number.split("").forEach((el, i) => {
    if (i < phone_number.length - 4) {
      answer += "*";
    } else {
      answer += el;
    }
  });

  return answer;
}
