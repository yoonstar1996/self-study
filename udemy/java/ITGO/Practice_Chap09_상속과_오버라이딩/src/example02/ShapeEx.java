package example02;

public class ShapeEx {
  public static void main(String[] args) {
    Circle c1 = new Circle();

    // Point클래스의 매개변수가 있는 생성자 호출
    // Circle클래스의 매개변수가 있는 생성사 호출
    // 색깔:black
    // 원점: (x: 0, y: 0)
    // 반지름:100
    c1.draw();

    Circle c2 = new Circle(new Point(150, 150), 300);

    // Point클래스의 매개변수가 있는 생성자 호출
    // Circle클래스의 매개변수가 있는 생성사 호출
    // 색깔: black
    // 원점: (x: 150, y: 150)
    // 반지름: 300
    c2.draw();

    Triangle t1 = new Triangle();
    
    // Point클래스의 매개변수가 있는 생성자 호출
    // Point클래스의 매개변수가 있는 생성자 호출
    // Point클래스의 매개변수가 있는 생성자 호출
    // Triangle의 매개변수 3개 호출됨
    // [p1]: 0, 0
    // [p2]: 50, 50
    // [p3]: 100, 100
    t1.draw();

    Point[] p = new Point[] {new Point(10, 10), new Point(20, 20), new Point(30, 30)};
    Triangle t2 = new Triangle(p);

    // Point클래스의 매개변수가 있는 생성자 호출
    // Point클래스의 매개변수가 있는 생성자 호출
    // Point클래스의 매개변수가 있는 생성자 호출
    // Triangle의 매개변수 p 호출됨
    // [p1]: 10, 10
    // [p2]: 20, 20
    // [p3]: 30, 30
    t2.draw();
  }
}
