package example02;

public class PersonEx {
  public static void main(String[] args) {
    // Person제네릭 클래스에 T를 String만 들어오게끔 정해졌다.
    Person<String> person1 = new Person<>();
    person1.setT("Yoon");
    String str = person1.getT();
    System.out.println(str); // Yoon
    
    Person<Integer> person2 = new Person<>();
    person2.setT(100);
    int value1 = person2.getT();
    System.out.println(value1); // 100

    Person<Apple> person3 = new Person<>();
    person3.setT(new Apple());
    Apple value2 = person3.getT();
    System.out.println(value2); // 사과
  }
}
