package example03;

public class Person {

  // 불변의 정적 상수
  // 무조건 선언과 동시에 초기화가 반드시 이루어져야한다.
  // 공용 데이터로써 사용되어진다.
  // 클래스 별로 관리되어진다.
  static final int MAX_NUMBER = 100;

  // final필드 초기화 방법
  // 1. 선언과 동시에 초기화
  final String NATION = "KOREA";
  // 2. 생성자에서 단 한번 초기화
  final int AGE;
  String name;
  public Person(int AGE, String name) {
    this.AGE = AGE;
    this.name = name;
  }

  @Override
  public String toString() {
    return "nation: " + this.NATION + ", age: " + this.AGE + ", name: " + this.name;
  }
}
