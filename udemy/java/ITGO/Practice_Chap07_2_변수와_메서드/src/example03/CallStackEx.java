package example03;

public class CallStackEx {
  public static void main(String[] args) {
    // 콜스택(Call Stack, LIFO:후입선출) <-> 큐(Queue, FIFO:선입선출)
    System.out.println("main 메서드 실행됨");
    CallStackEx.first(); // static은 static을 호출할 수 있다.
    System.out.println("main 메서드 종료됨");
  }
  
  public static void first() {
    System.out.println("first 메서드 실행됨");
    second(); // 같은 클래스 내에 메서드라면 클래스명은 생략해도 무방하다.
    System.out.println("first 메서드 종료됨");
  }
  
  public static void second() {
    System.out.println("second 메서드 실행됨");
    CallStackEx.third();
    System.out.println("second 메서드 종료됨");
  }

  public static void third() {
    System.out.println("third 메서드 실행됨");
    System.out.println("third 메서드 종료됨");
  }

  // 결과
  // main 메서드 실행됨
  // first 메서드 실행됨
  // second 메서드 실행됨
  // third 메서드 실행됨
  // third 메서드 종료됨
  // second 메서드 종료됨
  // first 메서드 종료됨
  // main 메서드 종료됨
}
