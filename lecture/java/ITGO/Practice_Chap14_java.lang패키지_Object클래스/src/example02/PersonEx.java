package example02;

import java.util.HashSet;

public class PersonEx {
  public static void main(String[] args) {
    // 사용자 정의 클래스에서 hash시리즈들은 반드시 hashCode()와 equals()를
    // 오버라이딩 해야 중복저장이 안된다.
    HashSet hashSet = new HashSet();

    String str1 = new String("가");
    String str2 = new String("가");
    Person person1 = new Person("Yoon", 29);
    Person person2 = new Person("Yoon", 40);

    System.out.println(str1.hashCode()); // 44032
    System.out.println(str2.hashCode()); // 44032
    // hashCode()

    System.out.println(person1.hashCode());
    // 2761621
    // hashCode()
    System.out.println(person2.hashCode());
    // 2761621
    // hashCode()

    hashSet.add(str1);
    hashSet.add(str2);
    
    System.out.println("저장된 객체수: " + hashSet.size()); // 저장된 객체수: 1
    
    hashSet.add(person1);
    hashSet.add(person2);

    System.out.println("저장된 객체수: " + hashSet.size()); // 저장된 객체수: 3

    // 자동적으로 toString() 호출
    System.out.println(person1); // 이름: Yoon, 나이: 29
    System.out.println(person2); // 이름: Yoon, 나이: 40
  }
}
