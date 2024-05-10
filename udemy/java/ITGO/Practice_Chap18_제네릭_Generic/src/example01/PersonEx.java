package example01;

public class PersonEx {
  public static void main(String[] args) {
    Person person = new Person();
    person.setObject("Yoon"); // 업 캐스팅(String -> Object)
    String str = (String) person.getObject(); // 다운 캐스팅(Object -> String)
    System.out.println(str); // Yoon
  }
}
