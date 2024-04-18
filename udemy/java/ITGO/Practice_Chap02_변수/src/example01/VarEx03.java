package example01;

public class VarEx03 {
  public static void main(String[] args) {
    byte b1 = 127;
    // byte b2 = b1 + 2; // 오버플로우 발생

    byte b2 = (byte) (b1 + 2); // 강제 형변환
    System.out.println("b1 : " + b1); // b1 : 127

    System.out.println("강제 형변환 후 b2 : " + b2); // 강제 형변환 후 b2 : -127

    int i1 = b1; // 자동 형변환
    System.out.println("자동 형변환 후 i1 : " + i1); // 자동 형변환 후 i : 127

    int i2 = 350;
    byte b3 = (byte) i2;
    System.out.println("b3 : " + b3); // b3 : 94

    // 정수와 실수간의 캐스팅(저장하는 방식이 틀리기 때문에
    // 반드시 데이터 손실이 있고 아울러 명시적 캐스팅 코드 들어가야함)
    int i3 = 100;
    float f1 = i3;
    System.out.println("정수 -> 실수 형변환 후 f1 : " + f1); // 100.0

    float f2 = 10.55f;
    int i4 = (int) f2;
    System.out.println("실수 -> 정수 형변환 후  : i4 " + i4); // 10

    char ch = 'a';
    int i5 = ch;
    // 문자값을 정수타입으로 바꾸게 되면,
    // 아스키코드 값으로 바뀌어서 출력이 된다.
    System.out.println("문자 -> 정수 형변환 후 i5 : " + i5); // 97
    
    // any type + "" = 문자열
    int i6 = 100;
    String str = "자바" + i6;
    System.out.println("str : " + str); // "자바100"
  }
}
