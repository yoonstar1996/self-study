package example01;

import java.util.Scanner;

// 중첩 if문
public class NestedIf {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("점수를 입력하세요. : ");
    int score = sc.nextInt();

    if(score >= 90) {
      // 중첩 if문(무제한으로 중첩if문 가능.)
      // 그치만 중첩 if문은 2개를 초과하지 않도록 한다.
      if(score >= 95) {
        System.out.println("당신은 A+등급입니다.");
      } else {
        System.out.println("당신은 A0등급입니다.");
      }
    } else if (score >= 80) {
      if(score >= 85) {
        System.out.println("당신은 B+등급입니다.");
      } else {
        System.out.println("당신은 B0등급입니다.");
      }
    }

    sc.close();
  }
}
