package example03;

import java.util.Scanner;

// while문
public class WhileEx02 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    boolean run = true;
    int speed = 0;

    while(run) {
      System.out.println("-------------------------------");
      System.out.println("1. 증속  |  2. 감속  |  3. 중지");
      System.out.println("-------------------------------");
      System.out.print("입력 : ");

      int choice = sc.nextInt();

      if(choice == 1) {
        speed++;
        System.out.println("현재 속도 : " + speed);
      } else if (choice == 2) {
        speed--;
        System.out.println("현재 속도 : " + speed);
      } else if (choice == 3) {
        System.out.println("중지합니다.");
        System.out.println("현재 속도 : " + speed);
        break;
        // System.exit(0);
        // run = false;
      } else {
        System.out.println("정해진 값을 입력하세요.");
      }
    }
    sc.close();
  }
}
