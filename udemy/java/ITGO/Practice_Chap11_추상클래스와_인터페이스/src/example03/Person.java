package example03;

public class Person implements A{

  @Override
  public void method() {
    System.out.println("인터페이스 A를 구현한 Person의 method() 호출됨");
  }

  public void method1() {
    System.out.println("Person클래스에 있는 method1() 호출됨");
  }
}
