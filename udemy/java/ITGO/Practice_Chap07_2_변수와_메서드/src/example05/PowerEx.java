package example05;

import java.util.Scanner;

public class PowerEx {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int x = 0;
    int n = 0;

    long result = 0l;

    System.out.println("제곱까지의 합을 계산합니다.");

    System.out.print("제곱하고 싶은 수 입력 : ");
    x = sc.nextInt();

    System.out.print("몇 승을 더할까요 : ");
    n = sc.nextInt();

    for(int i = 1; i <= n; i++) {
      result += power(x,i); // 3, 2
    }
    
    // 3의 2승까지의 합은 12입니다!
    System.out.printf("%d의 %d승까지의 합은 %d입니다!", x, n, result);

    sc.close();
  }

  public static long power(int x, int n) {

    if(n == 1) {
      return x;
    } else {
      return x * power(x, n-1);
    }
  }
}
