package example02;

// Switch
public class SwitchEx {
  public static void main(String[] args) {
    int score = 95;

    // int이하의 정수값, String값
    switch (score/10) {
      case 10:
      case 9:
        System.out.println("A등급입니다.");
        break;
      case 8:
        System.out.println("B등급입니다.");
        break;
      case 7:
        System.out.println("C등급입니다.");
        break;
      default:
        System.out.println("D등급 이하입니다.");
        break;
    }

      String str = "부장";
      
      // 문자열이 조건인 경우
      switch (str) {
        case "부장":
          System.out.println("450만원");
          break;
        case "차장":
          System.out.println("400만원");
          break;
        case "과장":
          System.out.println("350만원");
          break;
        case "대리":
          System.out.println("300만원");
          break;
        case "사원":
          System.out.println("250만원");
          break;
        default:
          System.out.println("없는 직급입니다.");
          break;
      }

      int number = 7;

      // 중첩 switch문
      switch (number) {
        case 1:
        case 7:
          switch (number) {
            case 1:
              System.out.println("011이시군요");
              break;
            case 7:
              System.out.println("017이시군요");
              break;
          }
          break;
          case 6:
          case 9:
            switch (number) {
              case 6:
                System.out.println("016이시군요");
                break;
              case 9:
                System.out.println("019이시군요");
                break;
            }
            break;
      }
  }
}
