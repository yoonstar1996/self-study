package example02;

public class Calculator {
  // 인스턴스 메서드
  // 인스턴스의 특성 : new 연산자로 인스턴스를 생성해야지만,
  // 참조변수명.인스턴스메서드명으로 접근 가능
  public int add(int x, int y) {

    // 가능
    // Calculator.multiple(10, 5);
    return x + y;
  }

  // 인스턴스 메서드
  public int substract(int x, int y) {
    return x - y;
  }

  // 정적(static) 메서드
  // static의 특성 : 인스턴스 생성 없이 클래스명.정적메서드명으로 바로 접근 가능하다.
  public static int multiple(int x, int y) {

    // 불가능 :
    // static 메서드는 이미 메모리 상단에 올라가있고 인스턴스 생성 없이 접근이 가능해야 되는데,
    // 아래 코드는 인스턴스가 생성되어야지만 사용 가능한 add()가 왔기 때문에
    // this.add(10, 5);
    return x * y;
  }

  // 정적(static) 메서드
  public static double divide(double x, double y) {
    return x / y;
  }
}
