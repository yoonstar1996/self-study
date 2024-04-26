package example05;

public class SuperEx {
  public static void main(String[] args) {
    // 자손 클래스의 인스턴스를 생성하면,
    // 조상 클래스의 인스턴스 생성이 제일 먼저 이루어지고,
    // 자손 클래스의 인스턴스가 생성되어  합쳐진 상태로 heap에 할당된다.
    Child child = new Child();

    // 조상 클래스 생성자 호출
    // 자손 클래스 생성자 호출
    //현재 인스턴스의 x : 20
    // 자손 클래스의 this.x : 20
    // 조상 클래스의 super.x : 100
    child.show();

    Child child2 = new Child();
    
    //  조상 클래스 매개변수가 있는 생성자 호출
    // 자손 클래스 생성자 호출
    // 현재 인스턴스의 x : 20
    // 자손 클래스의 this.x : 20
    // 조상 클래스의 super.x : 30
    child2.show();

    Parent parent = new Parent(65);
    parent.show(); // Parent의 show() 호출
  }
}
