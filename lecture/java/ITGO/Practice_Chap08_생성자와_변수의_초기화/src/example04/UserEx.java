package example04;

import java.util.Calendar;
import java.util.Date;

public class UserEx {
  public static void main(String[] args) {
    // User user1 = new User(); // 에러
    User user2 = User.getInstance();
    User user3 = User.getInstance();


    // 싱글톤 패턴을 사용하는 실제적인 예
    Calendar cal = Calendar.getInstance();
    Date d = cal.getTime();
    System.out.println(d); // Thu Apr 25 21:10:08 KST 2024

    System.out.println("user2 : " + user2); // user2 : example04.User@d8355a8
    System.out.println("user3 : " + user3); // user3 : example04.User@d8355a8
    User.add(); // add메서드 호출

    // 객체의 == 연산은 주솟값 비교 연산
    // if(user2 == user3) {
    // Object클래스의 equals() : 주소 비교
    if(user2.equals(user3)) {
      System.out.println("같은 객체입니다."); // 같은 객체입니다.
    } else {
      System.out.println("다른 객체입니다.");
    }

    // 싱글톤 패턴을 사용하는 이유
    // 단, 하나의 인스턴스를 생성해서 서로 공유를 원하고자 할 때 사용
  }
}
