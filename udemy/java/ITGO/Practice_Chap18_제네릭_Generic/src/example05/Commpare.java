package example05;

public class Commpare {
  // 매개변수 T타입을 Number(추상 클래스)타입이거나
  // Number클래스를 상속받는 자손 클래스만 T타입으로 들어올 수 있다.
  // (상위 타입 제한)
  public static <T extends Number> int compare(T t1, T t2) {
    // Number클래스의 doubleValue()는 원래 추상 메서드지만,
    // 자손 클래스(Integer, Double 등)이 올 수가 있는 자손 클래스가
    // doubleValue()를 오버라이딩 했기에 문제가 되지 않는다.
    double value1 = t1.doubleValue();
    double value2 = t2.doubleValue();

    return Double.compare(value1, value2);
  }
}
