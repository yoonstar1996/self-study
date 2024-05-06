package example02;

public class ReverseEx {
  public static void main(String[] args) {
    String str = "안녕하세요";
    String reverseStr = "";

    int count = 0;

    count = str.length();
    System.out.println("문자열의 길이: " + count); // 문자열의 길이: 5

    for(int i = 0; i < count; i++) {
      reverseStr += str.charAt(count - (i+1));
      System.out.println(reverseStr);
    }
    // 요
    // 요세
    // 요세하
    // 요세하녕
    // 요세하녕안
    
    System.out.println("역순 출력: " + reverseStr); // 역순 출력: 요세하녕안

    String r = reverseString("반갑습니다");
    System.out.println("reverseString() 호출 후: " + r); // reverseString() 호출 후: 다니습갑반
  }
  
  public static String reverseString(String str) {
    return new StringBuilder(str).reverse().toString();
  }
}
