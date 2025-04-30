package example03;

// Method
public class MethodEx {
  
  // 메서드의 선언부 구성
  // 1. 리턴타입(반환값) : int
  // 2. 메서드 명 : add
  // 3. 매개변수 or 인자값 or Arguments : int x, int y

  // 메서드의 구현부 : {
  //  안의 내용
  //}
  
  public static int add(int x, int y, int z) {
    System.out.println("add메서드 호출됨");
    return x + y + z;
  }

  public static int minus(int x, int y) {
    System.out.println("minus메서드 호출됨");
    return x - y;
  }

  public static void main(String[] args) {
    int num1 = 10;
    int num2 = 30;

    // 값에 의한 복사(Call by value)
    int result = add(num1, num2, 100);
    System.out.println("num1 + num2 + 100 : " + result); // num1 + num2 + 100 : 140

    result = minus(num1, num2);
    System.out.println("num1 - num2 : " + result); // mun1 - num2 : -20
  }
}
