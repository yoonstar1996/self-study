package example06;

public class Card {

  // 메모리 => heap 영역
  // 인스턴스 변수 -> 반드시 인스턴스 생성해야 접근 가능
  private String color; // 카드의 색
  private String company; // 카드의 회사

  // 메모리 => 클래스 영역
  // 클래스(정적, 공유) 변수 -> 인스턴스 생성 없이도 클래스명.static 변수명으로 접근 가능
  static int width = 100; // 카드의 폭
  static int height = 50; // 카드의 높이

  // getter(), setter() -> 인스턴스 메서드
  public String getColor() {
    return this.color;
  }
  public void setColor(String color) {
    this.color = color;
  }

  public String getCompany() {
    return this.company;
  }
  public void setCompany(String company) {
    this.company = company;
  }

  public void show() {
    // 지역변수를 사용하기 전에는 반드시 초기화를 해야한다.
    // int i;
    // System.out.println(i);

    // 메서드 안에 static 변수를 사용하지 못한다.
    // static의 특성은 인스턴스 생성없이도 얼마든지 접근 가능해야 하는데,
    // 언제 인스턴스가 생성될지 아무도 모르기 때문에 이렇게 코드를 작성하는 것은
    // 올바른 방법이 아니다.
    // static num = 10;

    String color = this.color;
    String company = this.company;

    System.out.println(color + ", " + company);
  }

  @Override
  public String toString() {
    // 클래스(정적) 변수는 접근 방법이 반드시 클래스명.static 변수명으로
    // 접근을 해야 올바른 방법이다.
    return "card의 색상 : " + this.getColor() + ", 회사 : " + this.getCompany() + 
      ", 크기 : (" + Card.width + ", " + Card.height + ")";
  }
}
