package example06;

public class StudentEx {
  public static void main(String[] args) {
    StudentAnonymous anonymous = new StudentAnonymous();

    anonymous.student1.wake();
    // ------------------------
    // 필드의 초기값 형태로 만들어진 익명 자손 객체
    // Yoon이 일어납니다.
    // Yoon이 등교합니다.
    // ------------------------

    anonymous.method1();
    // ------------------------
    // 로컬 변수의 초기값 형태로 만들어진 익명 자손 객체
    // Park이 일어납니다.
    // Park가 연습하러 갑니다.
    // ------------------------

    anonymous.meethod2(new Student("Lee") {
      public void goTraining() {
        System.out.println(this.name + "이 운동하러 갑니다.");
      }

      @Override
      public void wake() {
        System.out.println("------------------------");
        System.out.println("매개변수의 초기값 형태로 만들어진 익명 자손 객체");
        System.out.println(this.name + "이 일어납니다.");
        this.goTraining();
        System.out.println("------------------------");
      }
    });
    // ------------------------
    // 매개변수의 초기값 형태로 만들어진 익명 자손 객체
    // Lee이 일어납니다.
    // Lee이 운동하러 갑니다.
    // ------------------------

  }
}
