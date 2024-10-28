package example02;

// Person잉라는 클래스를 제네릭 타입으로 설계
public class Person<T> {
  // T라는 타입이 아직 정해지지 않았다.
  // T는 개발 시 정해진다. 하여, static은 올 수 없다.
  private T t;

  public Person() {
  }

  public T getT() {
    return t;
  }

  public void setT(T t) {
    this.t = t;
  }
}
