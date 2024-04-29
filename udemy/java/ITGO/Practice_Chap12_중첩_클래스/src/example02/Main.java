package example02;

public class Main {
  public static void main(String[] args) {

    A a = new A();
    // 중첩 클래스B의 생성자 호출
    // 정적 멤버 클래스C의 생성자 호출
    // --------------------
    // 외부 클래스A의 생성자 호출
    // 중첩 클래스B의 생성자 호출
    // 10
    // B클래스의 멤버 메서드 method1() 호출
    // 정적 멤버 클래스C의 생성자 호출
    // 16
    // 51
    // 정적 멤버 클래스C의 메서드 method1() 호출
    // 정적 멤버 클래스C의 메서드 method2() 호출
    // --------------------
    // 로컬 클래스D의 생성자 호출
    // 42
    // 로컬 클래스D의 멤버 메서드 lMethod() 호출

    System.out.println("--------------------");

    // 인스턴스 멤버 클래스인 B는
    // 반드시 외부 클래스 A의 인스턴스가 있어야 생성 가능하다.
    A.B b = a.new B();
    b.method1();
    // 중첩 클래스B의 생성자 호출
    // B클래스의 멤버 메서드 method1() 호출

    System.out.println("--------------------");
    
    // 정적 멤버 클래스인 C는
    // 외부 클래스 A의 인스턴스가 있던 없던 상관없이 접근 가능ㄴ하다.
    A.C.method2();
    System.out.println(A.C.c2);
    // 정적 멤버 클래스C의 메서드 method2() 호출
    // 51
    A.C c = new A.C();
    System.out.println(c.c);
    c.method1();
    // 정적 멤버 클래스C의 생성자 호출
    // 16
    // 정적 멤버 클래스C의 메서드 method1() 호출

    System.out.println("--------------------");

    // 외부 클래스의 인스턴스를 생성하면 얼마든지 메서드를 호출해
    // 로컬 클래스를 생성하여 사용할 수 있다.
    a.method();
    // 로컬 클래스D의 생성자 호출
    // 42
    // 로컬 클래스D의 멤버 메서드 lMethod() 호출
  }
}
