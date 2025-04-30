package example02;

// X 만들기
public class Create_X {
  public static void main(String[] args) {
    // *   *
    //  * *
    //   *
    //  * *
    // *   *
    int x = 1;
    int y = 5;
    // x, y는 서로 자리를 바꿔가면서, 조건에 대입되고 있으며 *의 자릿값이 된다.
    for(int i = 1; i <= 5; i++) {
      for(int j = 1; j <= 5; j++) {
        // System.out.print("*");
        if(j == x || j == y) {
          System.out.print("*");
        } else {
          System.out.print(" ");
        }
      }
      x++;
      y--;
      System.out.println();
    }
  }
}
