package example02;

public class TrimEx {
  public static void main(String[] args) {
    String str = "    안녕하세요    ";
    String str2 = str.trim();

    System.out.println(str); //     안녕하세요    
    System.out.println(str2);  // 안녕하세요
  }
}
