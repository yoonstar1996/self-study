package objectsExample;

import java.util.Objects;

public class EqualsAndDeepEqualsEx {
  public static void main(String[] args) {
    // 더 이상 쓰지않는 방식
    // Integer integer1 = new Integer(100);
    Integer integer1 = Integer.valueOf(100);
    Integer integer2 = Integer.valueOf(100);

    // 모든 포장 클래스에서는 Object클래스의 equals() 오버라이딩 되어있다.
    System.out.println(integer1.equals(integer2)); // true
    
    // Object의 equals()는 기준이 되는 객체,, 비교가 되어지는 객체가 따로 분리 되어있는 형태
    // Objects의 equals()는 비교하는 두 대상만 매개변수로 주면 된다. - 유지 보수 or 개발 유리
    System.out.println(Objects.equals(integer1, integer2)); // true

    Integer[] arr1 = new Integer[] { 10, 50 };
    Integer[] arr2 = new Integer[] { 10, 50 };

    // Objects.equals()는 매개변수가 참조 타입이 들어오면 주소 비교(얕은 비교)
    System.out.println(Objects.equals(arr1, arr2)); // false
    
    // Objects.deepEquals()는 매개변수로 배열이 들어오면 항목 값 비교(깊은 비교)
    System.out.println(Objects.deepEquals(arr1, arr2)); // true
  }
}
