package example01;

public class StudentEx {
  public static void main(String[] args) {
    Student student1 = new Student(); // 기본 생성자 호출
    System.out.println(student1); // null, 0

    Student student2 = new Student("Yoon", 29); // 매개변수가 있는 생성자 호출
    System.out.println(student2); // Yoon, 29

    Student student3 = new Student("Park"); // 매개변수 String만 있는 생성자 호출
    System.out.println(student3); // Park, 0

    Student student4 = new Student(31); // 매개변수 int만 있는 생성자 호출
    System.out.println(student4); // null, 31
  }
}
