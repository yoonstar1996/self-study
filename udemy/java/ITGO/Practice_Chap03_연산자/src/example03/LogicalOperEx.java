package example03;

// 논리 연산자
public class LogicalOperEx {
  public static void main(String[] args) {
    boolean result = false;
    int i = 10;
    char ch = 'b';

    result = (i > 5);
    System.out.println("i > 5 : " + result); // i > 5 : true

    result = (i > 9 && i < -8);
    System.out.println("i > 9 && i < -8 : " + result); // i > 9 && i < -8 : false

    result = (i > 9 || i < -8);
    System.out.println("i > 9 || i < -8 : " + result); // i > 9 || i < -8 : true

    // 소문자 알파벳인지 확인하는 식
    result = (ch >= 'a' && ch <= 'z');
    System.out.println("ch >= 'a' && ch <= 'z' : " + result); // ch >= 'a' && ch <= 'z' : true

    // 알파벳인지 확인하는 식
    result = (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    System.out.println("알파벳 : " + result); // 알파벳 : true
  }
}
