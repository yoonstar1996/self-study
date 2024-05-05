package example01;

public class StudentEx {
  public static void main(String[] args) {
    Student student1 = new Student(10, "Yoon", new int[] {100, 90});
    Student student2 = new Student(10, "Park", new int[] {60,80});

    System.out.println(student1.equals(student2));
    // equals()
    // false
  }
}
