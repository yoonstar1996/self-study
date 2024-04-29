package example04;

public class Outside {
  // 필드 선언
  String str = "Outside";

  // 멤버 메서드
  public void method() {
    System.out.println("Outside-method() 호출");
  }

  class Inner {
    // 필드 선언
    String str = "Inner";

    // 멤버 메서드
    public void method() {
      System.out.println("Inner-method() 호출");
    }

    public void showInfo() {
      // 여기서의 this는 Inner클래스의 this이다
      System.out.println(this.str); // Inner
      this.method(); // Inner-nethod() 호출

      // 외부 클래스에 접근하는 방법
      // 외부 클래스명.this.외부 클래스 멤버 이름
      System.out.println(Outside.this.str); // Outside
      Outside.this.method(); // Outside-method() 호출
    }
  }

  public void show() {
    System.out.println(this.str); // Outside
    this.method(); // Outside-method() 호출

    // System.out.println(Inner.this.str);
    Inner in = new Inner();
    System.out.println(in.str);
    in.method();
  }
}
