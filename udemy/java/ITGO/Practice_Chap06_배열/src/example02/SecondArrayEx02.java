package example02;

// 2차원 배열
public class SecondArrayEx02 {
  public static void main(String[] args) {
    int[][] scores = new int[][] {
                                  //국어, 영어, 수학
                                  {100, 70, 50},
                                  {70, 50, 30},
                                  {50, 80, 70},
                                  {55, 85, 77},
                                  {100, 80, 75},
                                };
    // 과목별 총점
    int korTotal = 0; // 국어
    int engTotal = 0; // 영어
    int mathTotal = 0; // 수학

    int totalSum = 0; // 합계
    double totalAvg = 0.0; // 평균
    // 번호    국어    영어    수학    총점    평균
    System.out.println("번호\t국어\t영어\t수학\t총점\t평균");

    for(int i = 0; i < scores.length; i++) {
      int sum = 0; // 개인별 총점
      double avg = 0.0; // 개인별 평균

      korTotal += scores[i][0];
      engTotal += scores[i][1];
      mathTotal += scores[i][2];

      // System.out.print(i+1);
      System.out.printf("%3d", i+1);

      for(int j = 0; j < scores[i].length; j++) {
        sum += scores[i][j];
        System.out.print("\t" +scores[i][j]);
      }
      totalSum += sum;
      avg = (double) (sum / scores[i].length); // 개인별 평균
      totalAvg += avg;
      
      // System.out.print("\t" + sum + "\t" + avg);
      // System.out.println();
      // printf() 메서드에서 %d <- 형식 지정자라고 부름
      // 형식 지정자의 갯수만큼 그에 대입되는 변수가 ,로 구분되어 제시
      // %n은 줄바꿈
      System.out.printf("\t%d \t%.2f%n", sum, avg);
    }
    totalAvg /= scores.length;
    // System.out.print("총점" + "\t" + korTotal +"\t" +  engTotal + "\t" + mathTotal + "\t" + totalSum + "\t" + totalAvg);
    System.out.printf("총점\t%d\t%d\t%d\t%d\t%.2f", korTotal, engTotal, mathTotal, totalSum, totalAvg);
  }
}
