package example01;

public class FieldInitEx {
  public static void main(String[] args) {

    // new 연산자가 클래스에 있는 멤버들의 바이트 크기만큼
    // heap에 메모리 할당을 하며 동시에 초기화를 시켜주는 역할을 한다.

    // 붕어빵을 찍고 있다.
    FieldInit fi = new FieldInit();

    System.out.println(fi.byteField); // 0
    System.out.println(fi.boolField); // false
    System.out.println(fi.floatField); // 0.0
    System.out.println(fi.arrField); // null

    // toString 오버라이드 전
    // 자동 .toString()
    System.out.println(fi); // example01.FieldInit@6e2c634b
    
    // toString 오버라이드 후
    System.out.println(fi); // byteField :0 boolField : false
  }
}
