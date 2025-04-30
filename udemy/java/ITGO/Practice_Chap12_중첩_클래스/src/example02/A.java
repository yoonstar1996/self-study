package example02;

public class A {
  B b1 = new B();

  C c1 = new C();

  public A() {
    System.out.println("--------------------");
    System.out.println("외부 클래스A의 생성자 호출");

    // 인스턴스 멤버 클래스는 외부 클래스A의 멤버이다.
    B b = new B();
    System.out.println(b.b);
    b.method1();

    C c = new C();
    System.out.println(c.c);
    System.out.println(C.c2);
    c.method1();
    C.method2();
    System.out.println("--------------------");
    
    // D d = new D(); // 메서드 내부에 선언 되어있기 때문에
    this.method();
  }
  
  // 인스턴스 멤버 클래스 B
  class B {
    int b = 10;
    // static int b2 = 20;
    public B() {
      System.out.println("중첩 클래스B의 생성자 호출");
    }
    
    public void method1() {
      System.out.println("B클래스의 멤버 메서드 method1() 호출");
    }

    // static void method2() {}
  }

  // 정적 멤버 클래스 C
  static class C {
    int c = 16;
    static int c2 = 51;
    public C() {
      System.out.println("정적 멤버 클래스C의 생성자 호출");
    }
    
    public void method1() {
      System.out.println("정적 멤버 클래스C의 메서드 method1() 호출");
    }
    
    static void method2() {
      System.out.println("정적 멤버 클래스C의 메서드 method2() 호출");
    }
  }

  public void method() {
    // 로컬 클래스안에는 절대로 static멤버가 못온다.
    class D {
      int d = 42;

      public D() {
        System.out.println("로컬 클래스D의 생성자 호출");
      }

      public void lMethod() {
        System.out.println(this.d);
        System.out.println("로컬 클래스D의 멤버 메서드 lMethod() 호출");
      }
    }
    // 로컬 클래스는 메서드 내부에서만 생성, 사용이 그낭하다.
    D d = new D();
    d.lMethod();
  }
}
