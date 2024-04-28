package example06;

public class IndirectEx {
  public static void main(String[] args) {
    A a = new A();
    B b = new B();
    a.method(b); // B클래스 method() 호출
    a.method2(b); // 인터페이스 I를 구현한 B클래스 method2() 호출

    I i = new B();
    i.methodB(); // 인터페이스 I를 구현한 B클래스 method2() 호출

  }
}
