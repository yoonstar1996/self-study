package example01;

public class NumberFormatEx {
  public static void main(String[] args) {
    String str1 = "100";
    String str2 = "100가";

    System.out.println(str1 + ", " + str2); // 100, 100가

    Integer.parseInt(str1);

    Integer.parseInt(str2); // 예외
    // Exception in thread "main" java.lang.NumberFormatException: For input string: "100가"
    // at java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:67)
    // at java.base/java.lang.Integer.parseInt(Integer.java:662)
    // at java.base/java.lang.Integer.parseInt(Integer.java:778)
    // at Parctice_Chap13_예외처리/example01.NumberFormatEx.main(NumberFormatEx.java:11)
  }
}
