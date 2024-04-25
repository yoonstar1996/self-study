package example01;

// 아무런 생성자가 존재하지 않으므로,
// 컴파일시에 컴파일러가 기본 생성자를 알아서 추가해준다.
class A {
  int value;
}

class B {
  int value;

  // 1번 방법
  public B() {

  }

  public B(int value) {
    this.value = value;
  }
}

public class ConstructorEx {
  public static void main(String[] args) {
    A a = new A();
    // B b = new B(); // 에러
    B b = new B(100); // 2번 방법
  }
}
