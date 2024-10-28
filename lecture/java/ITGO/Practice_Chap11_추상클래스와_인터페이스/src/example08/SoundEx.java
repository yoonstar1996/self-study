package example08;

public class SoundEx {
  public static void main(String[] args) {
    // 익명 구현 객체(이름 없음) -- UI이벤트 처리나 스레드 객체 간편 생성
    // 근본이 인터페이스
    Soundable soundable = new Soundable() {
      // 내부적으로 클래스니깐 멤버들을 선언할 수 있다.
      // 그치만, 외부에서 접근 불가
      int a = 10;
      public void method() {
        System.out.println("익명 구현 객체 메서드");
      }
      @Override
      public void sound() {
        String str = "냄비";
        System.out.println("첫 번째 익명 구현 객체:" + str);
        System.out.println(str + "에 물을 담습니다.");
        this.method();
        System.out.println(this.a);
      }
    };
    soundable.sound();
    // 첫 번째 익명 구현 객체:냄비
    // 냄비에 물을 담습니다.
    // 익명 구현 객체 메서드
    // 10

    // 외부에서 접근 불가능
    // soundable.a;
    // soundable.method();
  }
}
