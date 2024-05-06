package example02;

public class toXXXCaseEx {
  public static void main(String[] args) {
    String str = "Java Programming";
    String str2 = str.toLowerCase();
    System.out.println(str2); // java programming

    String str3 = str.toUpperCase();
    System.out.println(str3); // JAVA PROGRAMMING

    System.out.println(str2.equals(str3)); // false
    System.out.println(str2.equalsIgnoreCase(str3)); // true
  }
}
