package example05;

// 조상 클래스
public class Parent {
  int x = 100;

  // public Parent() {
  //   System.out.println("조상 클래스 생성자 호출");
  // }

  public Parent(int x) {
    this.x = x;
    System.out.println("조상 클래스 매개변수가 있는 생성자 호출");
  }

  public void show() {
    System.out.println("Parent의 show() 호출");
  }
}
