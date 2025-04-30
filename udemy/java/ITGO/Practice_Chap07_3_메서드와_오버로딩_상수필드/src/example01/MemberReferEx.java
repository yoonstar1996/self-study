package example01;

public class MemberReferEx {
  int iv; // 인스턴스 변수
  static int cv; // 클래스(정적) 변수
  
  // 인스턴스 메서드
  public void instanceMethod() {
    System.out.println(this.iv); // 인스턴스 변수 사용 가능

    // 이유 : 인스턴스 메서드가 호출될 때는 이미 인스턴스가 생성되어 있을 것임.
    System.out.println(cv); // 클래스 멤버 변수 사용 가능
    staticMethod(); // 클래스 멤버 메서드 사용 가능
  }
  
  // 클래스(정적) 메서드
  public static void staticMethod() {
    System.out.println(cv); // 클래스 멤버 변수 사용 가능

    // 이유 : 인스턴스가 언제 생성될지 아무도 모르기 때문에
    // 정적 메서드 내에서는 인스턴스 멤버들을 절대 사용 불가
    // System.out.println(this.iv); // 인스턴스 변수 사용 불가
    // this.instanceMethod(); // 인스턴스 멤버 메서드 사용 불가
  }
}
