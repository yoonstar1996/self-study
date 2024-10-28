package example02;

public class CharAtEx {
  public static void main(String[] args) {
    String ssn = "961110-1234567";
    // 특정 문자를 받고자 할 때
    char sex = ssn.charAt(7);
    if(sex == '1' || sex == '3' ) {
      System.out.println("남자 입니다.");
    } else if (sex == '2' || sex == '4') {
      System.out.println("여자 입니다.");
    } else {
      System.out.println("잘못된 성별입니다.");
    }
  }
}
