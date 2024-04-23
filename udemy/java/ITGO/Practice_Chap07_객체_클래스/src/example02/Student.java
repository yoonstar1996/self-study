package example02;

public class Student {
  String name;
  int age;

  // 불가능
  // public static String getName() {
  //   return this.name;
  // }

  @Override
  public String toString() {
    // this : 클래스(Student)의 주소(new 연산자가 인스턴스를 생성하면 비로소 활성화가 이루어짐)
    // this는 static 메서드나 클래스 안에 사용할 수 없다.
    return "이름 : " + this.name + ", 나이 : " + this.age;
  }
}
