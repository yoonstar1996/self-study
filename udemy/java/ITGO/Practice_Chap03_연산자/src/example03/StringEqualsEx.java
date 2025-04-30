package example03;

// 참조형 타입의 ==, !=을 배워보자
public class StringEqualsEx {
  public static void main(String[] args) {

    // 리터럴인 경우 : 먼저 같은 값이 메모리 공간(heap)에 있는지 확인
    // 있다면 같은 주소를 공유하게 되고, 없다면 새로운 곳에 인스턴스를 생성해준다.
    // new 연산자가 붙으면 무조건 새로운 인스턴스가 생성됨.

    String str1 = "아이티고";
    String str2 = "자바";
    String str3 = "아이티고";
    String str4 = new String("아이티고");

    // 참조형 타입에서 ''==은 주소를 비교'하고 있음.
    boolean result = (str1 == str2);
    System.out.println("str1 == str2 : " + result); // str1 == str2 : false

    // 같은 리터럴의 경우 -> 같은 주소를 공유함.
    System.out.println("str1 == str3 : " + (str1 == str3)); //str1 == str3 : true

    System.out.println("str1 == str4 : " + (str1 == str4)); //str1 == str4 : false

    // String클래스의 'equals() 메서드는 주소와 상관없이 값이 같다면', true를 리턴함.
    System.out.println("str1.equals(str4) : " + str1.equals(str4)); // str1.equals(str4) : true
  }
}
