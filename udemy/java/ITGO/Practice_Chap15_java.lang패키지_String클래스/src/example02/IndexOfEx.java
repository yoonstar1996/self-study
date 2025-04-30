package example02;

public class IndexOfEx {
  public static void main(String[] args) {
    // indexOf메서드는 찾기 기능을 할 때, 자주 쓰인다.
    String str = "오늘은 자바 공부하는 날";
    int index = str.indexOf("공부");

    System.out.println("공부의 시작 인덱스: " + index); // 공부의 시작 인덱스: 7

    // 공부라는 문자열이 포함되어 있으면...
    if(str.indexOf("공부") != -1) {
      System.out.println("공부와 관련된 내용입니다.");
    } else {
      System.out.println("공부와 관련없는 내용입니다.");
    }
  }
}
