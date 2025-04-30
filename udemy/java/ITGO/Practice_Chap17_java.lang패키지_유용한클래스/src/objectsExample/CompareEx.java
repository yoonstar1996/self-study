package objectsExample;

import java.util.Comparator;
import java.util.Objects;

public class CompareEx {

  // 중첩 클래스(정적 멤버 클래스)
  static class Student {
    int sno;
    String name;

    public Student(int sno, String name) {
      this.sno = sno;
      this.name = name;
    }
  }

  static class StudentComparator implements Comparator<Student> {
    // name을 가지고 비교
    @Override
    public int compare(Student o1, Student o2) {
      if(o1.name.compareTo(o2.name) > 0) {
        return -1;
      } else if(o1.name.compareTo(o2.name) == 0) {
        return 0;
      } else return 1;
    }

  }

  public static void main(String[] args) {
    Student student1 = new Student(1, "Yoon");
    Student student2 = new Student(1, "Yoon");
    Student student3 = new Student(3, "Park");

    // 비교자(Comparator<T>인터페이스를 익명 구현 객체로 대입)
    int result = Objects.compare(student1, student2, new Comparator<Student>() {
      @Override
      public int compare(Student o1, Student o2) {
        if(o1.sno < o2.sno) return -1;
        else if(o1.sno == o2.sno) return 0;
        else return 1;
        // return o1.sno - o2.sno;
      }
    });
    // o1.sno과 o2.sno가 같습니다.

    if(result == 1) {
      System.out.println("o1.sno가 큽니다.");
    } else if (result == 0) {
      System.out.println("o1.sno과 o2.sno가 같습니다.");
    } else {
      System.out.println("o2.sno가 큽니다.");
    }
    
    
    int result2 = Objects.compare(student1, student3, new StudentComparator() {});
    // o2.name이 큽니다.
    if(result2 == 1) {
      System.out.println("o1.name이 큽니다.");
    } else if (result2 == 0) {
      System.out.println("o1.name과 o2.name이 같습니다.");
    } else {
      System.out.println("o2.name이 큽니다.");
    }
    
  }
}
