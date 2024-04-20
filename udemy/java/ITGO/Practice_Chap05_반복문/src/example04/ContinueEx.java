package example04;

// continue문
public class ContinueEx {
  public static void main(String[] args) {
    // 1~10까지 홀수만 출력하기
    for(int i = 1; i <= 10; i++) {
      // continue문은 뒷문장을 실행하지 않고, 바로 증감식으로 이동한다.
      if(i % 2 == 0) {
        continue;
      } 

      System.out.println("1~10까지 홀수 : " + i);
    }

    // 2와 3의 공배수 출력하기
    for(int j = 1; j <= 100; j++) {
      if((j % 2 == 0) && (j % 3 == 0)) {
        System.out.println("2와 3의 공배수 : " + j);
      }
    }

    // 소수를 출력하기
    for(int k = 2; k <= 100; k++) {
      boolean isPrime = true;
      for(int l = 2; l < k; l++) {
        if(k % l == 0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime) {
        System.out.println("소수 : " + k);
      }
    }
  }
}
