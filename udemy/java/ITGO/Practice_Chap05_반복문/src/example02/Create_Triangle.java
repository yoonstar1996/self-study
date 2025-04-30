package example02;

// 삼각형 만들기
public class Create_Triangle {
  public static void main(String[] args) {
    // *****
    // ****
    // ***
    // **
    // *
    for(int i = 1; i <= 5; i++) {
      for(int j = i; j <= 5; j++) {
        System.out.print("*");
      }
      System.out.println(); // 줄바꿈
    }

    // *
    // **
    // ***
    // ****
    // *****
    for(int k = 1; k <= 5; k++) {
      for(int o = 1; o <= k; o++) {
        System.out.print("*");
      }
      System.out.println(); // 줄바꿈
    }
  }
}
