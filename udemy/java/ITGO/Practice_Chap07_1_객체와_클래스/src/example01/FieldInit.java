package example01;

// 설계도, 붕어빵틀을 만드는 작업
public class FieldInit {
  // 기본형 변수
  byte byteField; // 1 byte
  short shortField; // 2 byte
  int intField; // 4 byte(default type)
  long longField; // 8 byte

  boolean boolField; // 1 byte
  char charField; // 2 byte
  
  float floatField; // 4 byte
  double doubleField; // 8 byte

  // 참조형 변수
  int[] arrField; // 4 byte
  String strField; // 4 byte


  // annotation : 컴파일러엥게 강한 컴파일을 요구
  @Override
  // toString() : 클래스의 멤버변수(필드)의 값들을 수시로 확인하고자 할 때나,
  //              원하는 포멧으로 멤버변수들을 출력하고자 할 때 사용을 많이 함.
  public String toString() {
    String str = "byteField :" + byteField + " boolField : " + boolField;
    return str;
  }
}
