package example03;

public class Main {
  public static void main(String[] args) {
    A a = new A();
    // 정적 멤버 클래스C 생성자
    // 인스턴스 멤버 클래스B 생성자
    // 정적 멤버 클래스C 생성자

    System.out.println("----------------");

    A.B b = a.new B();
    // 인스턴스 멤버 클래스B 생성자

    System.out.println("----------------");
    
    a.method1();
    // method1() 내부
    // 인스턴스 멤버 클래스B 생성자
    // 정적 멤버 클래스C 생성자
    
    System.out.println("----------------");

    A.method2();
    // method2() 내부
    // 정적 멤버 클래스C 생성자
  }
}
