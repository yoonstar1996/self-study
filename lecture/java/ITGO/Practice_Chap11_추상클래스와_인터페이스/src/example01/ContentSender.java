package example01;

// 추상 클래스 : 1개 이상의 추상 메서드를 포함하는 클래스
// 추상 클래스는 인스턴스를 절대로 생성할 수가 없다.
public abstract class ContentSender {
  private String title;
  private String name;

  // 생성자
  public ContentSender(String title, String name) {
    this.title = title;
    this.name = name;
  }

  public String getTitle() {
    return title;
  }

  public String getName() {
    return name;
  }
  
  // 추상 메서드 : 선언부만 존재하고 구현부가 없는 것
  // 상속을 통해서 반듯디 재정의가 되어야 비로소 인스턴스를 생성할 수 있다.
  public abstract void sendMsg(String content);
}
