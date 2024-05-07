package example02;

public class BoxingUnBoxingEx {
  public static void main(String[] args) {
    // 박싱(Boxing)코드 -> 객체화 시킴
    // 아래 두 개의 코드는 자바9 이후부터는 권장하지 않음.
    Integer obj1 = new Integer(100);
    Integer obj2 = new Integer("100");
    
    // 권장 코드
    Integer obj3 = Integer.valueOf(100);

    // 컴파일 시 new Integer(100)
    Integer obj4 = 100;

    System.out.println("박싱 후");
    System.out.println(obj1); // 100
    System.out.println(obj2); // 100
    System.out.println(obj3); // 100
    System.out.println(obj4); // 100

    System.out.println();

    // 언박싱(UnBoxing)코드 -> 기본값으로 바꾼다.
    int value1 = obj1.intValue();
    int value2 = obj2;
    int value3 = obj3;
    int value4 = obj4.intValue();

    System.out.println("언박싱 후");
    System.out.println(value1); // 100
    System.out.println(value2); // 100
    System.out.println(value3); // 100
    System.out.println(value4); // 100
  }
}
