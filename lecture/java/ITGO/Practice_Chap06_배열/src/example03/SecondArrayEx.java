package example03;

// 가변 배열
public class SecondArrayEx {
  public static void main(String[] args) {
    int[][] array = {
                      {95, 86, 100, 55},
                      {83, 92, 96},
                      {78, 83, 93, 87, 88, 77, 10},
                    };
    // 
    int sum = 0; // 합계
    double avg = 0.0; // 평균
    int count = 0;
    for(int i = 0; i < array.length; i++) {
      for(int j = 0; j < array[i].length; j++) {
        sum += array[i][j];
        count++;
      }
    }
    avg = (double) (sum / count);
    System.out.println("가변 배열의 합계(sum) : " + sum); // 가변 배열의 합계(sum) : 1123
    System.out.printf("가변 배열의 평균(avg) : %.1f", avg); // 가변 배열의 평균(avg) : 80.0
  }
}
