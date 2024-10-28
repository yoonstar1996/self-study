package example04;

public class ThreadNameEx {
  public static void main(String[] args) {
    Thread thread = Thread.currentThread();
    System.out.println("프로그램 시작 스레드 명: " + thread.getName());
    
    Thread threadA = new ThreadA();
    System.out.println("[ThreadA를 생성한 스레드 이름]: " + Thread.currentThread().getName());
    System.out.println("[main스레드가 threadA의 이름을 가져온 것]: " + threadA.getName());
    threadA.start();
    
    Thread threadB = new ThreadB();
    System.out.println("[ThreadB를 생성한 스레드 이름]: " + Thread.currentThread().getName());
    System.out.println("[main스레드가 threadB의 이름을 가져온 것]: " + threadB.getName());
    threadB.start();

    // 프로그램 시작 스레드 명: main
    // [ThreadA를 생성한 스레드 이름]: main
    // [main스레드가 threadA의 이름을 가져온 것]: Thread A
    // [ThreadB를 생성한 스레드 이름]: main
    // [main스레드가 threadB의 이름을 가져온 것]: Thread B
    // [현재 실행 중인 스레드]: Thread A
    // [현재 실행 중인 스레드]: Thread B
    // Thread B가 출력한 내용:0
    // Thread B가 출력한 내용:1
    // Thread B가 출력한 내용:2
    // Thread A가 출력한 내용:0
    // Thread A가 출력한 내용:1
    // Thread A가 출력한 내용:2
    // Thread A가 출력한 내용:3
    // Thread B가 출력한 내용:3
    // Thread A가 출력한 내용:4
    // Thread B가 출력한 내용:4
  }
}
