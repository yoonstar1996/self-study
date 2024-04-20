package example03;

// while문
public class WhileEx01 {
  public static void main(String[] args) {
    int sum = 0;
    int i = 1; // while문은 초기화 하는 부분이 따로 존재하지 않는다.

    // while문 옆에는 조건식만 들어가기 때문에,
    // for문에 비해서 일반적 루핑엥서는 가독성이 떨어진다.
    while(i <= 10) {
      sum += i;
      i++;
    }
    System.out.println("1~10까지의 합 : " + sum); // 1~10까지의 합 : 55

    // while문은 무한 루프용으로 많이 사용된다.
    // if()문, break문과 함께 무한 루프를 벗어날 코드를 작성해 줘야 한다.
    while(true) {
      if(i == 10) {
        break;
      }
      i++;
      System.out.println(i); // 1, 2, 3, ..., 10
    }
  }
}
