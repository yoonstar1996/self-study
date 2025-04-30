package example01;

// for문
public class ForEx {
  public static void main(String[] args) {
    // 싱글루프일때
    // int i = 1; -> 초기화 코드(최초 1번만 실행)
    // i <= 100 -> 조건식(참이어야지만, 실행블럭 실행)
    // ㅑ++ -> 증감식
    
    // 1~100 합을 구하는 반복문
    int sum1 = 0;
    for(int i = 1; i <=100; i++) {
      sum1 += i;
    }
    System.out.println("1부터 100까지의 합 : " + sum1); // 1부터 100까지의 합 : 5050

    // 디버깅 : debug창으로 의도치 않게 넘어갔다면, 프로그램의 문제가 발생한 것
    // 에러를 잡아나가는 과정을 디버깅이라고 한다.

    // 누적 합계가 2000이 넘을때 i의 값을 출력하시오.
    int sum2 = 0;
    int temp = 0;
    for(int i = 1; i <=100; i++) {
      sum2 += i;
      if(sum2 >= 2000) {
        temp = i;
        break;
      }
    }
    System.out.println("2000이 넘을때 i의 값 : " + temp); // 2000이 넘을때 i의 값 : 63
  }
}
