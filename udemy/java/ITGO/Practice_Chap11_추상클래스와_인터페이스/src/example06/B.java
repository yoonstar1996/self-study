package example06;

public class B implements I {
  public void method() {
    System.out.println("B클래스 method() 호출");
  };

  @Override
  public void methodB() {
    System.out.println("인터페이스 I를 구현한 B클래스 method2() 호출");
  }
}
