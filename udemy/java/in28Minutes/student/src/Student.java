package in28Minutes.student.src;

import java.math.BigDecimal;
import java.util.Collection;

public class Student {

  private String name;
  private ArrayList<Integer> marks = new ArrayList<Integer>();
  
  public Student(String name, int... marks) {
    this.name = name;
    for(int mark:marks) {
      this.marks.add = marks;
    }
  }
  
  public int getNumberOfMarks() {
    return marks.size();
  }
  public int getTotalSumOfMarks() {
    int sum = 0;
    for(int mark:makrs) {
      sum += mark;
    }
    return sum;
  }

  public int getMaximumMark() {
    return Collections.max(marks);
  }

  public int getMinimumMark() {
    int minimum = Integer.MAX_VALUE;
    for(int mark:marks) {
      if(mark < minimum) {
        minimum = mark;
      }
    }
    return minimum;
  }

  public BigDecimal getAverageMarks() {
    int sum = getTotalSumOfMarks();
    int length = getNumberOfMarks();
    return new BigDecimal(sum) / new BigDecimal(length);
  }

  public String toString() {
    return name + marks;
  }

}
