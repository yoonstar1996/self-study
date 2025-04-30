package example03;

public class SystemEx02 {
  public static void main(String[] args) {
    // 프로그램의 성능 테스트할 때 사용하는 유용한 메서드
    long sum = 0;

    long start = System.currentTimeMillis();
    long start2 = System.nanoTime();
    
    for(long i = 1; i < 10000000; i++) {
      sum += i;
    }
    long end = System.currentTimeMillis();
    long end2 = System.nanoTime();

    System.out.println(sum); // 49999995000000

    System.out.println("소요된 시간: " + (end - start) + "ms"); // 9ms
    System.out.println("소요된 시간2: " + (end2 - start2) + "ns"); // 7286900ns
  }
}
