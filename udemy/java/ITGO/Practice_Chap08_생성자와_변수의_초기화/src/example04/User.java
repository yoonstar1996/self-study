package example04;

public class User {
  // 1. 해당 클래스 자신의 타입으로 정적 멤버 선언과 동시에 생성을 하고 있다.
  private static User singleton = new User();

  // 2. 해당 클래스를 외부에서 new 연산자로 인스턴스를 생성 못하게 막자.
  private User() {

  }

  // 3. 해당 클래스의 멤버의 주소를 공유하기 위해
  //    외부에서 호출할 수 있는 getter()를 제공해주고 있다.
  public static User getInstance() {
      return User.singleton;
  }

  public static void add() {
    System.out.println("add메서드 호출");
  }
}
