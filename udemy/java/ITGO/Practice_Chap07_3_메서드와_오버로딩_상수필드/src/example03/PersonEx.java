package example03;

public class PersonEx {
  public static void main(String[] args) {
    Person p1 = new Person(29, "Park");
    Person p2 = new Person(31, "Kim");
    Person p3 = new Person(30, "Lee");
    // final 속성은 상수이므로 값을 변경 절대 못함.
    // p.NATION = "USA";
    // p.AGE = 100;
    p1.name = "Yoon";

    // 주소가 모두 다름
    System.out.println(p1); // nation: KOREA, age: 29, name: Yoon, 주소: example03.Person@59fa1d9b
    System.out.println(p2); // nation: KOREA, age: 31, name: Kim, 주소: example03.Person@28d25987
    System.out.println(p3); // nation: KOREA, age: 30, name: Lee, 주소: example03.Person@4501b7a

    // 주소가 모두 같음
    System.out.println(Person.MAX_NUMBER); // 100
    System.out.println(Person.MAX_NUMBER); // 100
  }
}
