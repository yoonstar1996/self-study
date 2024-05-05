package example02;

public class Person {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return this.name;
  }

  public int getAge() {
    return this.age;
  }

  // hash시리지들은 동등객체 판단하기 위해서 1차적으로 hashCode() 호출
  @Override
  public int hashCode() {
    System.out.println("hashCode()");
    return this.name.hashCode() + this.age;
  }

  // 2차적으로 값이 또 같은 equals() 호출
  @Override
  public boolean equals(Object obj) {
    System.out.println("equals()");
    if(obj instanceof Person) {
      Person person = (Person) obj;
      if((this.name.equals(person.name)) && (this.age == person.age)) {
        return true;
      }
    } return false;
  }

  // 객체의 주소보다 의미있는 데이터를 출력하게끔 오버라이딩
  @Override
  public String toString() {
    return "이름: " + this.getName() + ", 나이: " + this.getAge();
  }

}
