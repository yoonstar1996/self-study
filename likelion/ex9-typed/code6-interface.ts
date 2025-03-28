{
  class Exam {
    constructor(public kor: number, public eng: number) {}
    total() {
      return this.kor + this.eng;
    }
  }
  const exam: Exam = new Exam(100, 90);
  console.log("total: ", exam.total());
}

{
  interface Exam {
    kor: number;
    eng: number;
    total(): number;
  }

  class ExamImp1 implements Exam {
    constructor(public kor: number, public eng: number) {}
    total() {
      return this.kor + this.eng;
    }
  }

  const exam: Exam = new ExamImp1(100, 90);
  console.log("total: ", exam.total());
}
