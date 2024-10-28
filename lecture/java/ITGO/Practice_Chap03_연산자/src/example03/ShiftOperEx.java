package example03;

public class ShiftOperEx {
  public static void main(String[] args) {
    int a = 8;
    int b = 2;

    // shift연산은 그래픽 분야에서 많이 사용된다.
    // 이유 : 고속처리
    System.out.println("a << b : " + (a << b)); // a << b : 32
    System.out.println("a >> b : " + (a >> b)); // a >> b : 2
  }
}
