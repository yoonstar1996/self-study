package example01;

public class SmsSender extends ContentSender{
  private String content;

  public SmsSender(String title, String name, String content) {
    super(title, name);
    this.content = content;
  }

  public String getContent() {
    return this.content;
  }

  // 조상 클래스의 추상 메서드를 오버라이딩한 것
  @Override
  public void sendMsg(String recipient) {
    System.out.println("제목: " + this.getTitle());
    System.out.println("이름: " + this.getName());
    System.out.println("내용: " + this.getContent());
    System.out.println("받는 사람: " + recipient);
  }
}
