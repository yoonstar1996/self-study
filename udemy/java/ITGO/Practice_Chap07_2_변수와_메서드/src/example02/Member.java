package example02;

public class Member {
  int iv = 100; // 인스턴스 멤버변수
  static int sv = 200; // static 멤버변수

  // 인스턴스 메서드
  public void iMethod() {
    System.out.println("iv : " + this.iv);
    // System.out.println("sv : " + Member.sv);
  }
  
  // static 메서드
  public static void sMethod() {
    // 인스턴스가 언제 만들어질지 아무도 모르기 때문에
    // System.out.println("iv : " + this.iv); // 불가능

    // sv는 static 변수이기 때문에 인스턴스 생성없이도 접근이 가능해야하는데,
    // static 메서드 내에서는 얼마든지 접근 가능하다.
    System.out.println("sv : " + Member.sv);
  }
}
