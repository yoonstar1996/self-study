package example06;

public class A {
  // B클래스가 만들어져야만 에러가 사라짐
  // B클래스가 A클래스에게 직접적 영향을 끼친다.
  public void method(B b){
    b.method();
  };

  public void method2(I i) {
    i.methodB();
  }
}
