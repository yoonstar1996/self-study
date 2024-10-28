package example02;

import java.util.Scanner;
import java.util.Arrays;

// 2차원 배열
public class SecondArrayEx03 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[][] student; // 2차원 배열을 선언
    int count = 0, num = 0, sum = 0, total = 0; // 반수, 인원, 반별 합계, 총 합계
    double avg = 0.0; // 평균
    double avgTotal = 0.0;

    System.out.print("반수 입력 : ");
    count = sc.nextInt();
    student = new int[count][]; // 반의 갯수를 1차원 배열로 할당(heap)
    // System.out.println("2차원 배열 주소 : " + student); // 2차원 배열 주소 : [[I@68de145

    for(int i = 0; i < student.length; i++) {
      System.out.printf("%d반의 인원 입력 : ", i+1);
      num = sc.nextInt(); // 반의 인원을 받는다.
      student[i] = new int[num];

      for(int j = 0; j < student[i].length; j++) {
        System.out.printf("%d반의 %d번의 점수 : ", (i+1), (j+1));
        student[i][j] = sc.nextInt(); // 반의 인원의 점수를 받는다
      }
      System.out.println();
    }

    // 점수가 제대로 입력되었는지 확인하는 코드
    // System.out.println(Arrays.toString(student));
    System.out.println("반\t합계\t평균");

    for(int i = 0; i < student.length; i++) {
      sum = 0; // 반의 합계를 초기화
      for(int j = 0; j < student[i].length; j++) {
        sum += student[i][j]; // 반별 합계
      }
      total += sum; // 총 합계
      avg = (double) (sum / student[i].length); // 반 평균
      avgTotal += avg; // 반 평균의 총 합계
      System.out.printf("%d반\t%d\t%.1f\n", i+1, sum, avg);
    }

    avgTotal /= student.length;
    System.out.printf("계\t%d\t%.1f\n", total, avgTotal);

    sc.close();
  }
}
