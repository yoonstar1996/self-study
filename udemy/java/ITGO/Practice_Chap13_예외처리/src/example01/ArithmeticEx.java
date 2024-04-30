package example01;

public class ArithmeticEx {
  public static void main(String[] args) {
    // 산술적 예외 발생
    int a = 10;
    int b = 0;

    int result = a / b; // 예외
    // Exception in thread "main" java.lang.ArithmeticException: / by zero
    // at Parctice_Chap13_예외처리/example01.ArithmeticEx.main(ArithmeticEx.java:9)

    System.out.println(result);
  }
}
