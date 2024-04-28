package example03;

// interface의 본질은 추상 메서드, static final은 부수적 개념
public interface A {
  int MAX = 10; // static final 생략 가능
  void method(); // public abstract 생략 가능
}
