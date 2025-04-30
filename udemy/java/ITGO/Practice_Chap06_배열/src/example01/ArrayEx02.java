package example01;

// array문
public class ArrayEx02 {
  public static void main(String[] args) {
    int sum = 0; // 총점
    double avg = 0.0; // 평균

    // 선언과 동시에 초기화
    int[] score = new int[] {100, 200, 300};

    System.out.println("배열의 크기 : " + score.length); // 배열의 크기 : 3

    for(int i = 0; i < score.length; i++) {
      sum += score[i];
    }

    System.out.println("총점 : " + sum); // 총점 : 600

    avg = sum / score.length;

    System.out.println("평균 : " + avg); // 평균 : 200.0
  }
}
