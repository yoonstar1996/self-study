package example05;

// 자손 클래스
public class Child extends Parent {
  int x = 20;

  public Child() {
    // super(); // 조상 클래스의 기본 생성자를 호출.
              // 생략하더라도 컴파일러가 알아서 추가함.
    super(30);
    System.out.println("자손 클래스 생성자 호출");
  }

  @Override
  public void show() {
    System.out.println("현재 인스턴스의 x : " + x);
    System.out.println("자손 클래스의 this.x : " + this.x);
    System.out.println("조상 클래스의 super.x : " + super.x);
  }
}
