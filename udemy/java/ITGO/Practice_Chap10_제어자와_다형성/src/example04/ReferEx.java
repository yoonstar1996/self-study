package example04;

public class ReferEx {
  public static void main(String[] args) {
    Parent parent = new Child();
    Child child = new Child();

    // 멤버 변수는 근본을 벗어나지 못함
    System.out.println(parent.x); // 100
    System.out.println(child.x); // 200

    // 멤버 메서드는 현재 참조하고 있는 인스턴스에 영향을 받음
    parent.method(); // 자손 메서드 호출
    child.method(); // 자손 메서드 호출

    parent.type(new Child()); // 조상 클래스의 멤버 x 값: 100
  }
}
