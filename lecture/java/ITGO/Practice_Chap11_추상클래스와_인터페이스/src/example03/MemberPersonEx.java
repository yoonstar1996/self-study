package example03;

public class MemberPersonEx {
  public static void main(String[] args) {
    Member member = new Member();

    member.method(); // 인터페이스 A를 구현한 Member의 method() 호출됨
    member.method1(); // Member클래스에 있는 method1() 호출됨

    // interface도 일종의 조상이다. 하여 다형성 개념이 적용된다.
    A a = new Member();

    a.method(); // 인터페이스 A를 구현한 Member의 method() 호출됨
    // a.method1(); 불가능

    Person person = new Person();

    person.method(); // 인터페이스 A를 구현한 Person의 method() 호출됨
    person.method1(); // Person클래스에 있는 method1() 호출됨

    a = new Person();

    a.method(); // 인터페이스 A를 구현한 Person의 method() 호출됨

    // 상수 접근 시, 인터페이스명.상수명
    System.out.println(A.MAX); // 10
  }
}
