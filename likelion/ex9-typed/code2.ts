interface Exam {
  kor: number;
  eng: number;
}
const exam1: Exam = { kor: 100, eng: 90 };
const exam2: Exam = { kor: 100, eng: 90 };
const total1: number = exam1.kor + exam1.eng;
const total2: number = exam2.kor + exam2.eng;
