package example03;

import java.util.Properties;
import java.util.Set;

public class SystemEx03 {
  public static void main(String[] args) {
    String osName = System.getProperty("os.name");
    System.out.println("운영체제: " + osName); // 운영체제: Windows 11

    String userName = System.getProperty("user.name");
    System.out.println(userName); // admin

    // Properties 클래스는 Map계열의 컬렉션이다. String, String을 갖는다.
    // 키도 String, 값도 String이다.
    Properties properties = System.getProperties();
    // Map컬렉션에서 키 값만 Set계열로 가져오는 메서드
    Set set = properties.keySet();

    System.out.println("Key          Value");
    for(Object objKey : set) {
      String key = (String) objKey;
      String value = System.getProperty(key);
      System.out.println(key + "          " + value);
    }
  }
}
