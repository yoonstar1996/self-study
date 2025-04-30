package example01;

public class VarEx02 {
  public static void main(String[] args) {
    int number; // 선언. 4바이트 만큼 변수를 메모리(스택)를 할당함.
    number = 200; // 초기화
    int number2 = 500; // 선언과 동시에 초기화
    System.out.println(number); // 200
    System.out.println(number2); // 500

    String str = new String("붕어빵");
    String str2 = "붕어빵2";
    System.out.println(str); // 붕어빵
    System.out.println(str2); // 붕어빵2
    str = null; // null은 '없다'라는 뜻
    System.out.println(str); // null

    double dnum = 10.1;
    System.out.println(dnum); // 10.1

    // 상수(변하지 않는 값)는 선언과 동시에 초기화를 한 후,
    // 다시 그 상수값을 변경시키는 코드가 들어가면 안 된다.
    final int MAX_NUMBER = 100;
    // MAX_NUMBER = 200;
    System.out.println("상수 : " + MAX_NUMBER); // 상수 : 100
  }
}
