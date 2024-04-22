package example02;

// 2차원 배열
public class SecondArrayEx01 {
  public static void main(String[] args) {
    // []대괄호의 갯수가 곧 차원을 의미한다.
    int[][] scores = new int[][] {
                                  {100, 100, 100},
                                  {50, 50, 50},
                                  {10, 20, 30},
                                  {40, 20, 60},
                                };
    // 2차원 배열의 값을 읽고 쓰기 위해서는 반드시 더블 루프가 필요하다.
    for(int i = 0; i < scores.length; i++) {
      for(int j = 0; j < scores[i].length; j++) {
        System.out.println(scores[i][j]);
      }
    }
    
    System.out.println("2차원 배열의 주소 : " + scores); // 2차원 배열의 주소 : [[I@6193b845
    System.out.println("2차원 배열의 크기 : " + scores.length); // 2차원 배열의 크기 : 4
    
    for(int i = 0; i < scores.length; i++) {
      // 1차원 배열의 주소 : [I@c4437c4
      // 1차원 배열의 주소 : [I@433c675d
      // 1차원 배열의 주소 : [I@3f91beef
      // 1차원 배열의 주소 : [I@1a6c5a9e
      System.out.println("1차원 배열의 주소 : " + scores[i]);
      System.out.println("1차원 배열의 크기 : " + scores[i].length); // 1차원 배열의 크기 : 3
    }
    // 2차원 배열에서는 2차원 배열명도 주소, 1차원 배열명도 주소가 된다.(중요)

    // 2차원 배열에서는 배열명[][]이 곧 변수와 동일하다.
    scores[0][0] = 80;

    // 2차원 배열의 향상된 for문(JDK 1.5)
    // collection farmework 객체에 접근할 때, 자주 사용되는 방법
    int sum = 0;
    for(int[] temp : scores) {
      for(int score : temp) {
        sum += score;
      }
    }

    System.out.println("합계 : " + sum); // 합계 : 610
  }
}
