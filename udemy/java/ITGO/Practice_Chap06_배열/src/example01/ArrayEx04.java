package example01;

import java.util.Arrays;

// array문
public class ArrayEx04 {
  public static void main(String[] args) {
    int[] balls = new int[5];

    for(int i = 0; i < balls.length; i++) {
      balls[i] = (int) (Math.random() * 20) + 1;
    }
    
    System.out.println("정렬 전 balls : " + Arrays.toString(balls));
    
    
    // 버블 소팅을 위해서는 1차원 배열이라도 반드시 더블 루프가 필요하고 
    // 조건문이 하나 들어와야 한다.
    // 외부 루프가 한번 끝나면 가장 큰 값이 맨 오른쪽으로 이동
    for(int i = 0; i < balls.length; i++) {
      for(int j = 0; j < balls.length - 1; j++) {
        // 버블 소팅(오름차순)
        if(balls[j] > balls[j+1]) {
          int temp = balls[j];
          balls[j] = balls[j+1];
          balls[j+1] = temp;
        }
      }
    }
    // =
    Arrays.sort(balls);

    System.out.println("정렬 후 balls : " + Arrays.toString(balls));
  }
}
