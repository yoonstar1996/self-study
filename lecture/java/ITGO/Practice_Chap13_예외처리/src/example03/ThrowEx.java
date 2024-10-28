package example03;

public class ThrowEx {
  public static void main(String[] args) {
    try {
      // throw : 강제로 예외를 발생시키는 키워드
      throw new Exception("고의로 예외 발생시킴");
    } catch (Exception e) {
      System.out.println(e.getMessage()); // 고의로 예외 발생시킴
    }
    System.out.println("정상 종료"); // 정상 종료
  }
}
