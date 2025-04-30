package example07;

public class Default_StaticEx {
  public static void main(String[] args) {
    MyInterface myInterface = new Person();

    myInterface.method();
    // 10
    // MyInterface를 구현한 Person클래스의 메서드 호출
    myInterface.dMethod(); // MyInterface의 디폴트 메서드 Person클래스에서 오버라이딩!
    MyInterface.sMethod(); // MyInterface의 정적 메서드 호출
  }
}
