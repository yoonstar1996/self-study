package example03;

public class SystemEx01 {
  public static void main(String[] args) {
    for(int i = 0; i < 5; i++) {
      System.out.println(i);
    }
    // 0
    // 1
    // 2
    // 3
    // 4

    for(int i = 0; i < 5; i++) {
      System.out.println(i);
      if(i == 3) {
        // 프로그램을 종료시킨다.
        System.exit(0);
      }
    }
    // 0
    // 1
    // 2
    // 3
  }
}
