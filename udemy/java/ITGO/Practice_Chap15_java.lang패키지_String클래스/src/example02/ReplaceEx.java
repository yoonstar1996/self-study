package example02;

public class ReplaceEx {
  public static void main(String[] args) {
    // replace()는 문자열을 대체하는 메서드이다.
    String oldStr = "자바는 객체 지향 언어입니다.";
    String newStr = oldStr.replace("자바", "JAVA");

    System.out.println(newStr); // JAVA는 객체 지향 언어입니다.

    System.out.println(oldStr.hashCode()); // 938616683
    System.out.println(newStr.hashCode()); // -1337706871
  }
}
