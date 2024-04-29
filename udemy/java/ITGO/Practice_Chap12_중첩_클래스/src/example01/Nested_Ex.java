package example01;

public class Nested_Ex {

  // 인스턴스 멤버 클래스
  class A {
    int iv = 100;
    // static 멤버 변수는 사용 불가
    // static int sv = 200;
    public A() {
      System.out.println("A생성자 호출");
    }

    public void method1() {
      System.err.println("A클래스의 method1() 호출");
    }
    
    // public static void method2() {
    //   System.err.println("A클래스의 method2() 호출");
    // }
  }
  
  // 정적 멤버 클래스
  static class B {
    int iv = 400;
    static int sv = 350;
    
    public B() {
      System.out.println("B생성자 호출");
    }

    public void method1() {
      System.err.println("B클래스의 method1() 호출");
    }
    
    public static void method2() {
      System.err.println("B클래스의 method2() 호출");
    }
  }

  public void method1() {
    // 로컬 클래스 선언과 사용(메서드 내에 선언하여, 잠깐 사용할 용도)
    class C {
      int iv = 600;
      // static int sv = 310;
      public C() {
        System.out.println("로컬 클래스C 생성자 호출");
      }

      public void lMethod() {
        System.out.println("로컬 클래스C의 메서드 호출");
      }
    }
    // 로컬 클래스는 해당 메서드 내에서만 사용이 가능하다.
    C c = new C();
    System.out.println(c.iv); // 600
    c.lMethod(); // "로컬 클래스C의 메서드 호출"
  }

  public void method2() {
    // 로컬 클래스 선언과 사용(메서드 내에 선언하여, 잠깐 사용할 용도)
    class D {
      int iv = 490;
      // static int sv = 310;
      public D() {
        System.out.println("로컬 클래스D 생성자 호출");
      }

      public void lMethod() {
        System.out.println("로컬 클래스D의 메서드 호출");
      }
    }
    // 로컬 클래스는 해당 메서드 내에서만 사용이 가능하다.
    D d = new D();
    System.out.println(d.iv); // 600
    d.lMethod(); // "로컬 클래스D의 메서드 호출"
  }
  
  public static void main(String[] args) {
    Nested_Ex ne = new Nested_Ex();
    // 인스턴스 멤버 클래스는 외부 클래스의 인스턴스가 반드시 있어야 생성이 가능하다.
    Nested_Ex.A a = ne.new A(); // A생성자 호출
    System.out.println(a.iv); // 100
    a.method1(); // A클래스의 method1() 호출

    System.out.println("-----------");
    
    // 정적 클래스 외부 클래스의 인스턴스가 없어도 접근 가능하다.
    System.out.println(Nested_Ex.B.sv); // 350
    Nested_Ex.B.method2(); // B클래스의 method2() 호출
    Nested_Ex.B b = new B(); // B생성자 호출
    System.out.println(b.iv); // 400
    b.method1(); // B클래스의 method1() 호출

    System.out.println("-----------");
    
    ne.method1();
    // 로컬 클래스C 생성자 호출
    // 600
    // 로컬 클래스C의 메서드 호출

    System.out.println("-----------");

    ne.method2();
    // 로컬 클래스D 생성자 호출
    // 490
    // 로컬 클래스D의 메서드 호출

    // 멤버 클래스와 로컬 클래스를 구분짓는 잣대는 무엇인가?
    // 순번 :: 로컬 클래스는 순번 붙는다.
  }
}
