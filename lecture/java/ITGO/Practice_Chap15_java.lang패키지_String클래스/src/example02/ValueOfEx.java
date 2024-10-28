package example02;

public class ValueOfEx {
  public static void main(String[] args) {
    String str1 = String.valueOf(false);
    System.out.println(str1); // false

    // valueOf()메서드는 GUI프로그래밍에서 많이 등장함.
    String str2 = String.valueOf(777.999);
    System.out.println(str2); // 777.999
  }
}
