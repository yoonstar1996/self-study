package example01;

public class SenderEx {
  public static void main(String[] args) {
    // 추상 클래스이기 때문에 절대 인스턴스를 생성할 수가 없다.
    // ContentSender contentSender = new ContentSender();

    ContentSender contentSender1 = new kakaoSender("카카오톡", "Yoon", "안녕하세요");

    contentSender1.sendMsg("Park");
    // 제목: 카카오톡
    // 이름: Yoon
    // 내용: 안녕하세요
    // 받는 사람: Park

    ContentSender contentSender2 = new SmsSender("SMS", "Lee", "반갑습니다");

    contentSender2.sendMsg("Moon");
    // 제목: SMS
    // 이름: Lee
    // 내용: 반갑습니다
    // 받는 사람: Moon
  }
}
