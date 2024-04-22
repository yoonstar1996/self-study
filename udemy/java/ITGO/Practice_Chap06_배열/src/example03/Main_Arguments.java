package example03;

// main()메서드의 매개변수의 활용하는 방법
public class Main_Arguments {
  public static void main(String[] args) {
    if(args.length != 2) {
      System.out.println("프로그램의 사용법");
      System.out.println("아이디 입력, 패스워드 입력");
    }

    String id = args[0];
    String pw = args[1];

    System.out.println("아이디 : " + id);
    System.out.println("패스워드 : " + pw);
  }
}
