package example06;

public class CardEx {
  public static void main(String[] args) {
    Card card1 = new Card();
    card1.setColor("노랑");
    card1.setCompany("국민은행");

    System.out.println(card1); // card의 색상 : 노랑, 회사 : 국민은행, 크기 : (100, 50)
    card1.show(); // 노랑, 국민은행

    // static 변수는 반드시 클래스명.static 변수명으로 접근하여야 함.
    // 웬만하면, 공유변수는 분석하는 단계에서 바꾸지 않는게 바람직하다.
    card1.width = 80; // X
    Card.height = 30; // O

    Card card2 = new Card();
    card2.setColor("파랑");
    card2.setCompany("농협은행");

    System.out.println(card2); // card의 색상 : 파랑, 회사 : 농협은행, 크기 : (80, 30)

  }
}
