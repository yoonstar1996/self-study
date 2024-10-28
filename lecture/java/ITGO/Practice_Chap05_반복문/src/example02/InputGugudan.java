package example02;

import java.util.Scanner;

public class InputGugudan {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("구구단을 출력합니다.");
    System.out.print("몇 단부터 출력할까요 : ");
    int startNum = sc.nextInt();

    System.out.print("끝 단은 얼마인가요 : ");
    int endNum = sc.nextInt();

    for(; startNum <= endNum; startNum++) {
      System.out.println("******" + startNum + " 단 ******");
      for(int j = 1; j < 10; j++) {
        System.out.println(startNum + "*" + j + "=" + (startNum * j));
      }
    }
    
    sc.close();
  }
}