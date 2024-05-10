package example07;

public class StudentEx {
  public static void main(String[] args) {
    // 필드의 다형성
    Person<String, String> person = new Student<String, String, Integer>();
    person.setKind("황인종");
    person.setMode("전투");
    
    System.out.println(person.getKind() + " : " +
    person.getMode());
    // 황인종 : 전투
    
    Student<String, String, Integer> student = new Student<String, String, Integer>();
    student.setKind("백인종");
    student.setMode("수비");
    student.setC(5);

    System.out.println(student.getKind() + " : " +
    student.getMode() + ", " +
    student.getC());
    // 백인종 : 수비, 5
  }
}
