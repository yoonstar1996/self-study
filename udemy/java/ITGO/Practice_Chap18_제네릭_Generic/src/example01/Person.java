package example01;

// 일반 코드
public class Person {
  private Object object;

  public Person() {
  }

  // 리턴 타입이 Object이고, 매개변수가 Object이다.
  // -> 모든 클래스를 다 리턴 타입, 매개변수로 하겠다.(다형성)
  public Object getObject() {
    return object;
  }

  public void setObject(Object object) {
    this.object = object;
  }
}
