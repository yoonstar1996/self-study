package example01;

public class OperatorEx {
  public static void main(String[] args) {
    int v1 = 5;
    int v2 = 2;

    int result = v1 + v2;
    System.out.println("더하기 결과 : " + result); // 더하기 결과 : 7
    
    result = v1 - v2;
    System.out.println("빼기 결과 : " + result); // 빼기 결과 : 5
    
    result = v1 * v2;
    System.out.println("곱하기 결과 : " + result); // 곱하기 결과 : 10
    
    result = v1 / v2;
    System.out.println("나누기 결과 : " + result); // 나누기 결과 : 2
    
    result = v1 % v2;
    System.out.println("나머지 결과 : " + result); // 나머지 결과 : 1
    
    // 예외 처리 코드
    try {
      result = v1 / 0; // 산술 연산 예외가 발생하는 부분
    } catch (Exception e) {
      System.out.println("예외 발생 : " + e.toString()); // 예외 발생 : java.lang.ArithmeticException: / by zero

    }
  }
}
