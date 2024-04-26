package example02;

public class Circle extends Shape{
  Point center; // 원점
  int r; // 반지름

  public Circle() {
    this(new Point(0, 0), 100);
  }

  public Circle(Point center, int r) {
    System.out.println("Circle클래스의 매개변수가 있는 생성사 호출");
    this.center = center;
    this.r = r;
  }

  @Override
  public void draw() {
    System.out.println("색깔: " + this.color);
    System.out.println("원점: (x: " + this.center.x + ", y: " + this.center.y + ")");
    System.out.println("반지름: " + this.r);
  }
}
