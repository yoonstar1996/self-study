package example04;

public class PersonEx {
  public static void main(String[] args) {
    Person<Integer> p1 = Util.changing(100);
    int value1 = p1.getT();
  
    System.out.println("Person객체가 가지고 있는 값: " + value1); // Person객체가 가지고 있는 값: 100
    
    Person<String> p2 = Util.changing("Yoon");
    String value2 = p2.getT();
    
    System.out.println("Person객체가 가지고 있는 값: " + value2); // Person객체가 가지고 있는 값: Yoon
  }
}
