package example03;

// CPU의 연산의 오차를 설명한다.
public class AccuracyEx {
  public static void main(String[] args) {
    int apple = 1;
    double unit = 0.1;
    int number = 7;

    double result = apple - (unit * number); // 기대되는 값 0.3
    System.out.println("result : " + result); // result : 0.29999999999999993
  }
}
