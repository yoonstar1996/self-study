package example08;

public class ChildEx {
  public static void main(String[] args) {
    // 익명 자식 객체 -- UI이벤트 처리나 스레드 객체 간편 생성
    // 근본이 클래스
    Parent parent = new Parent() {
      int b = 43;

      public void method2() {
        System.out.println("익명 자식 객체 메서드");
      }

      public void method() {
        int a = 20;
        System.out.println("a: " + a);
        System.out.println("b: " + this.b);
        this.method2();
      }
    };
    parent.method();
    // 조상 생성자
    // a: 20
    // b: 43
    // 익명 자식 객체 메서드'

    // 외부에서 접근 불가능
    // parent.b;
    // parent.method2();
  }
}
