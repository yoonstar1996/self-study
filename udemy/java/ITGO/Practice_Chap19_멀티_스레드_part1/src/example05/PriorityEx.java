package example05;

public class PriorityEx {
  public static void main(String[] args) {
    // main스레드
    Thread thread1 = Thread.currentThread();
    System.out.println(thread1.getName() + ": " + thread1.getPriority());

    for(int i = 1; i <= 5; i++) {
      Thread thread = new CalcThread("Thread: " + i);
      // Thread1,2,3,4는 우선순위가 가장 낮다.
      if(i != 5) {
        thread.setPriority(Thread.MIN_PRIORITY);
      } else {
        thread.setPriority(Thread.MAX_PRIORITY);
      }
      thread.start();
    }
    // main: 5
    // [작업 완료 스레드]: Thread: 4
    // [작업 완료 스레드]: Thread: 3
    // [작업 완료 스레드]: Thread: 5
    // [작업 완료 스레드]: Thread: 2
    // [합계]: 49999995000000
    // [합계]: 49999995000000
    // [합계]: 49999995000000
    // [합계]: 49999995000000
    // [작업 완료 스레드]: Thread: 1
    // [합계]: 49999995000000

    // 아무리 우선 순위를 10으로 주었다 해도, 작업을 마치는 빈도가 높을 뿐이지,
    // 무조건 먼저 끝낸다는 보장이 없다.
    // 자바는 순환 할당(Round-Robin)방식을 사용하고 있기 때문에, CPU스케줄러의 상태에 따라 달라진다.
  }
}
