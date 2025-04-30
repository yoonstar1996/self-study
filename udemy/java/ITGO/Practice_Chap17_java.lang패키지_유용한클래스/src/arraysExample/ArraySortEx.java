package arraysExample;

import java.util.Arrays;

// 사용자 정의 클래스는 정렬을 하기 위해서는
// Comparable 인터페이스를 구현해야 함.
class Person implements Comparable<Person> {
  String name;
  int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  @Override
  public int compareTo(Person o) {
    // 오름차순(name)
    return this.name.compareTo(o.name);
    // 내림차순(name)
    // return o.name.compareTo(this.name);

    // 오름차순(age)
    // return this.age - o.age;
    // 내림차순(age)
    // return o.age - this.age;
  }
}

public class ArraySortEx {
  public static void main(String[] args) {
    // 기본형 타입과 String클래스는 기본적으로 오름차순 정렬이 이루어진다.
    int[] arr = {55, -10, -9, 0, 100};
    Arrays.sort(arr);
    System.out.println("기본형 타입 소팅 후: " + Arrays.toString(arr));
    // 기본형 타입 소팅 후: [-10, -9, 0, 55, 100]

    String[] names = new String[] {"Yoon", "Park", "Lee", "Moon", "Song"};
    Arrays.sort(names);
    System.out.println("String 타입 소팅 후: " + Arrays.toString(names));
    // String 타입 소팅 후: [Lee, Moon, Park, Song, Yoon]

    // 사용자 정의 클래스 정렬
    Person person1 = new Person("Yoon", 29);
    Person person2 = new Person("Park", 34);
    Person person3 = new Person("Lee", 30);
    Person person4 = new Person("Moon", 22);
    Person person5 = new Person("Song", 26);

    Person[] persons = {person1, person2, person3, person4, person5};

    Arrays.sort(persons);
    for(Person person : persons) {
      System.out.println("이름: " + person.name + ", 나이: " + person.age);
    }
    // 이름: Lee, 나이: 30
    // 이름: Moon, 나이: 22
    // 이름: Park, 나이: 34
    // 이름: Song, 나이: 26
    // 이름: Yoon, 나이: 29

    // 배열 검색(binarySearch)는 반드시 sort하고 난 뒤에 해야한다.
    int index = Arrays.binarySearch(persons, person2);
    System.out.println("person2 인스턴스가 있는 index: " + index + ", 이름: " + person2.name);
    // person2 인스턴스가 있는 index: 2, 이름: Park
  }
}
