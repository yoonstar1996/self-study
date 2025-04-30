package example04;

public class Child extends Parent{
  int x = 200;

  @Override
  public void method() {
    System.out.println("자손 메서드 호출");
  }
}
