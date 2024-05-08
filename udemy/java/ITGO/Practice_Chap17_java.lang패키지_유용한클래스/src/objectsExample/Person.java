package objectsExample;

import java.util.Arrays;
import java.util.Objects;

public class Person {
  int age;
  String name;
  int[] info;

  public Person(int age, String name, int[] info) {
    this.age = age;
    this.name = name;
    this.info = info;
  }

  @Override
  public int hashCode() {
    // 하위호환(구버전)
    // return this.age + this.name.hashCode() + Arrays.toString(this.info).hashCode();
    
    // 신규 개발 시, 아래와 같이 작성하면 해쉬코드를 얻기가 상당히 수월하다.
    return Objects.hash(this.age, this.name, Arrays.toString(this.info));
  }
}
