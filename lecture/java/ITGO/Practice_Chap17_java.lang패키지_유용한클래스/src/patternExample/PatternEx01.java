package patternExample;

import java.util.regex.Pattern;

public class PatternEx01 {
  public static void main(String[] args) {
    // 010 or 02로 시작하는 전화번호
    String numberPattern = "(010|02)-\\d{3,4}-\\d{4}";
    String phoneNum = "010-8950-0693";

    boolean numberResult = Pattern.matches(numberPattern, phoneNum);

    if(numberResult) System.out.println("전화번호 양식이 맞습니다.");
    else System.out.println("전화번호 양식이 아닙니다.");
    // 전화번호 양식이 맞습니다.
    
    // 이메일 양식
    String emailPattern = "\\w+@\\w+\\.\\w+(\\.\\w+)?";
    String emailData = "yagobo1110@naver.com";
    
    boolean emailResult = Pattern.matches(emailPattern, emailData);

    if(emailResult) System.out.println("이메일 양식이 맞습니다.");
    else System.out.println("이메일 양식이 아닙니다.");
    // 이메일 양식이 맞습니다.
  }
}
