package example02;

public class SubstringEx {
  public static void main(String[] args) {
    // substirng(): 문자열을 잘래넝 String으로 반환
    String phoneNum = "01012345678";
    String str1 = phoneNum.substring(3);
    System.out.println(str1); // 12345678

    // 마지막 인덱스는 미포함
    String str2 = phoneNum.substring(0, 3);
    System.out.println(str2); // 010
  }
}
