package example01;

public class ObjectEqualsEx {
  public static void main(String[] args) {
    // Object클래스의 equals()
    // 아래 코드는 서로 주소가 다르다.
    Object object1 = new Object();
    Object object2 = new Object();

    // Object크래스의 equals()는 원론적으로 메모리 번지 비교
    boolean result1 = object1.equals(object2);
    boolean result2 = object1 == object2;

    System.out.println("equals(): " + result1); // equals(): false
    System.out.println("==연산자: " + result2); // ==연산자: false
  }
}
