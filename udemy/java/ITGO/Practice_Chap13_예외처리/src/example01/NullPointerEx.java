package example01;

public class NullPointerEx {
  public static void main(String[] args) {
    String str = null;

    System.out.println(str.toString()); // 예외
    // Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.toString()" because "str" is null
    // at Parctice_Chap13_예외처리/example01.NullPointerEx.main(NullPointerEx.java:7)
  }
}
