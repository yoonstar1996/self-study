package example02;

public class EqualsEx {
  public static void main(String[] args) {
    String str1 = new String("Yoon");
    String str2 = "Yoon"; // 리터럴 타입으로 대입
    String str3 = "Yoon"; // 리터럴 타입으로 대입

    // == 연산자: 주소 비교
    if(str1 == str2) {
      System.out.println("같은 번지의 인스턴스");
    } else {
      System.out.println("다른 번지의 인스턴스");
    }

    // 같은 리터럴의 경우
    if(str2 == str3) {
      System.out.println("같은 번지의 인스턴스");
    } else {
      System.out.println("다른 번지의 인스턴스");
    }

    // String의 equals(): 값 비교(Object클래스의 equals() 오버라이딩)
    if(str1.equals(str2)) {
      System.out.println("같은 값 입니다.");
    } else {
      System.out.println("다른 값 입니다.");
    }

    if(str2.equals(str3)) {
      System.out.println("같은 값 입니다.");
    } else {
      System.out.println("다른 값 입니다.");
    }
  }
}
