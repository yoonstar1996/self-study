package example02;

public class LengthEx {
  public static void main(String[] args) {
    String phonNum = "01012345678";
    System.out.println("문자열의 길이: " + phonNum.length()); // 문자열의 길이: 11

    int length = phonNum.length();

    if(length == 11) {
      System.out.println("핸드폰 번호 자리가 맞습니다.");
    } else {
      System.out.println("다시 입력해주세요.");
    }
  }
}
