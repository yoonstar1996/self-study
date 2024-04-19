package example01;

import java.util.Scanner;

// if, if-else, if-else if-else
public class If {
  public static void main(String[] args) {
    // int score = 93;

    Scanner sc = new Scanner(System.in);
    System.out.print("점수를 입력하세요. : ");
    int score = sc.nextInt();
    
    // if
    if(score > 90) {
      System.out.println("점수가 90보다 큽니다.");
      System.out.println("등급은 A입니다.");
    }
    
    if(score > 80) {
      System.out.println("점수가 80보다 큽니다.");
      System.out.println("등급은 B입니다.");
    }

    // if-else구문은 50%확률일 때, 사용하는게 바람직하다.
    if(score >= 90) {
      System.out.println("90점 이상입니다.");
    } else {
      System.out.println("90점 미만입니다.");
    }
    
    // if-else if-else
    // score변수의 값에 따라서 아래의 조건문에서 분기가 일어남.
    if(score >= 90) {
      System.out.println("점수가 90~100점 사이입니다.");
      System.out.println("등급은 A입니다.");
    } else if (score >= 80) {
      System.out.println("점수가 80~89점 사이입니다.");
      System.out.println("등급은 B입니다.");
    } else if (score >= 70) {
      System.out.println("점수가 70~79점 사이입니다.");
      System.out.println("등급은 C입니다.");
    } else {
      System.out.println("점수가 70점 미만입니다.");
      System.out.println("등급은 D입니다.");
    }

    sc.close();
  }
}
