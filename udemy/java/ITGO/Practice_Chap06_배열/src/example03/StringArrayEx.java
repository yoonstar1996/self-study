package example03;

import java.util.Arrays;

// String배열
public class StringArrayEx {
  public static void main(String[] args) {
    String str = new String("자바");
    System.out.println(str);

    // 객체(클래스) 배열
    String[] strArr = new String[] {"안녕", "홍길동", "김연아"};

    for(int i = 0; i < strArr.length; i++) {
      System.out.println(strArr[i]);
    }

    strArr[0] = "하세요";

    System.out.println(Arrays.toString(strArr)); // [하세요, 홍길동, 김연아]

    System.out.println("strArr의 주소 : " + strArr.toString()); // strArr의 주소 : [Ljava.lang.String;@49097b5d

    // Object 클래스는 모든 클래스의 최고 조상
    // String 클래스는 Object 클래스의 toString() 오버라이딩(재정의)
    System.out.println("strArr의 주소 : " + strArr[0].toString()); // strArr의 주소 : 하세요


    // 향상된 for문
    for(String str1 : strArr) {
      System.out.println("향상된 for문 strArr : " + str1);
    }
  }
}
