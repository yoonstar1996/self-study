package example03;

public class A {
  // 인스턴스 멤버 클래스
  class B {
    public B() {
      System.out.println("인스턴스 멤버 클래스B 생성자");
    }
  }

  // 정적 멤버 클래스
  static class C {
    public C() {
      System.out.println("정적 멤버 클래스C 생성자");
    }
  }

  // 인스턴스 멤버(필드)
  B b = new B();
  C c = new C();

  // 인스턴스 멤버 메서드
  // 이 메서드를 호출할 때에는
  // 이미 클래스A의 인스턴스가 생성되어있기 때문에 b, c 가능
  public void method1() {
    // 지역 변수
    System.out.println("method1() 내부");
    B b = new B();
    C c = new C();
  }
  
  // 정적 멤버
  // B클래스는 인스턴스 멤버 클래스이기 때문에, static을 붙이면 안된다.
  // static B b1 = new B();
  // static A.B b2 = new B();
  static C c1 = new C();
  
  // static은 static만 접근 가능하다.
  public static void method2() {
    // 지역 변수
    System.out.println("method2() 내부");
    // 인스턴스 멤버 클래스이므로 안된다.
    // B b = new B();
    C c = new C(); // 정적 메서드이므로 정적 로컬 변수로 선언을 해도 무방하다.
  }

  // 결론 : 중첩 클래스에서의 인스턴스 필드나 메서드는 언제든지 생성 가능하지만, 정적 필드나 정적 메서드는 정적 클래스에서만 생성이 가능하다.
}
