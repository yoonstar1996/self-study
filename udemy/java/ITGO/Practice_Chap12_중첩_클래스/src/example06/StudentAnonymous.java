package example06;

public class StudentAnonymous {
  // 멤버 변수의 초기값
  Student student1 = new Student("Yoon") {
    // 익명 자손 객체의 멤버 메서드
    public void goSchool() {
      System.out.println(this.name + "이 등교합니다.");
    }

    @Override
    public void wake() {
      System.out.println("------------------------");
      System.out.println("멤버 변수의 초기값 형태로 만들어진 익명 자손 객체");
      System.out.println(this.name + "이 일어납니다.");
      this.goSchool();
      System.out.println("------------------------");
    };
  };
  
  // 로컬 변수의 초기값
  public void method1() {
    Student lStudent = new Student("Park") {
        public void goSkate() {
          System.out.println(this.name + "가 연습하러 갑니다.");
        }

        @Override
        public void wake() {
          System.out.println("------------------------");
          System.out.println("로컬 변수의 초기값 형태로 만들어진 익명 자손 객체");
          System.out.println(this.name + "이 일어납니다.");
          this.goSkate();
          System.out.println("------------------------");
        };
    };
    lStudent.wake();
  }

  // 매개변수의 초기값
  public void meethod2(Student student) {
    student.wake();
  }
}
