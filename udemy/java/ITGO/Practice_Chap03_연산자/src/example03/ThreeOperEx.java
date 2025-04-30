package example03;

import java.util.Scanner;

public class ThreeOperEx {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("점수를 입력하세요 : ");

    int score = sc.nextInt(); // 70
    
    char grade = (score >= 90) ? 'A' : 'B';
    System.out.println("당신의 등급 : " + grade); // 당신의 등급 : B

    // 삼항연산자의 중첩
    grade = (score >= 90) ? 'A' : (score >= 80 ? 'B' : 'C');
    System.out.println("당신의 등급2 : " + grade); // 당신의 등급2 : C

    sc.close();
  }
}
