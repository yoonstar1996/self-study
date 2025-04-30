package example01;

public class MathEx {
  public static void main(String[] args) {
    // 절댓값
    int v1 = Math.abs(-5);
    double v2 = Math.abs(-7.88);
    System.out.println(v1); // 5
    System.out.println(v2); // 7.88

    // 올림값
    double v3 = Math.ceil(5.3);
    System.out.println(v3); // 6.0

    // 내림값
    double v4 = Math.floor(5.3);
    System.out.println(v4); // 5.0

    // 최댓값, 최솟값
    int v5 = Math.max(10, 5);
    System.out.println(v5); // 10

    int v6 = Math.max(10, 5);
    System.out.println(v6); // 5

    // 랜덤값
    double v7 = Math.random();
    System.out.println(v7); // 0.29565351481656355

    // 가까운 정수의 실숫값
    double v8 = Math.rint(5.3);
    double v9 = Math.rint(5.5);
    System.out.println(v8); // 5.0
    System.out.println(v9); // 6.0

    // 반올림값(소숫점 첫재짜리에서 반올림)
    long v10 = Math.round(5.33);
    long v11 = Math.round(5.5);
    System.out.println(v10); // 5
    System.out.println(v11); // 6

    // 소숫점 셋째자리에서 반올림하는 값
    double value = 12.3456;
    double temp1 = value * 100;
    System.out.println(temp1); // 1234.56
    long temp2 = Math.round(temp1);
    System.out.println(temp2); // 1235
    double v12 = temp2 / 100.0;
    System.out.println(v12); // 12.35

  }
}
