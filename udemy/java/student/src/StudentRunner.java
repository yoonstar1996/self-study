package student.src;

public class StudentRunner {
  public static void main(String[] args) {
    
    Student student = new Student("Ranga", 99, 98, 100);
    Student student2 = new Student("eve", 98, 100);
    Student student3 = new Student("adam", 92, 99, 98, 100);

    int number = student.getNumberOfMarks();
    int sum = student.getTotalSumOfMarks();
    int maximumMark = student.getMaximumMark();
    int minimunMark = stduent.getMinimumMark();
    Bigecimal average = student.getAverageMarks();

  }
}
