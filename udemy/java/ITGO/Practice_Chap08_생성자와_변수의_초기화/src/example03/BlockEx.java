package example03;

public class BlockEx {

  // 클래스 초기화 블록 : 클래스가 로딩될 때, 단 한번 호출(클래스 영역)
  static {
    System.out.println("클래스 초기화 블록 실행됨");
  }

  // 인스턴스 초기화 블록 : 인스턴스가 생성될 때마다 호출(heap)
  {
    System.out.println("인스턴스 초기화 블록 실행됨");
  }

  public BlockEx() {
    System.out.println("생성자 호출됨");
  }

  // 클래스 변수 초기화 순서
  // 1. 기본 값 -> 2. 명시적 초기화 -> 3. 클래스 초기화 블록

  // 인스턴스 변수 초기화 순서
  // 1. 기본 값 -> 2. 명시적 초기화 -> 3. 인스턴스 초기화 블록 -> 4. 생성자

  public static void main(String[] args) {
    BlockEx b1 = new BlockEx(); // 클래스 초기화 블록 실행됨 -> 인스턴스 초기화 블록 실행됨 -> 생성자 호출됨
  }
}
