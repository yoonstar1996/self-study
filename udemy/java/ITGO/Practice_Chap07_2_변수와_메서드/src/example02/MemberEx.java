package example02;

public class MemberEx {

  public static void study() {
    System.out.println("자바 공부를 합니다.");
  }

  public void m1() {
    System.out.println("인스턴스 메서드");
  }
  public static void main(String[] args) {
    // static 멤버들이므로 인스턴스 생성없이,
    // 얼마든지 클래스명.정적멤버명으로 접근이 가능
    Member.sMethod(); // sv : 200
    Member.sv = 500 ;
    Member.sMethod(); // sv : 500

    MemberEx.study(); // 자바 공부를 합니다.
    
    // 인스턴스 멤버들을 사용하기 위해서는 반드시 new 연산자가 heap에
    // 인스턴스를 만들어야 사용이 가능하다.
    Member m = new Member();
    
    m.iMethod(); // iv : 100
    m.iv = 300;
    m.iMethod(); // i : 300

    // 올바르지 않은 접근 방법
    m.sv = 200;
    
    // MemberEx.m1(); // 불가능
    MemberEx me = new MemberEx();
    me.m1();
  }
}
