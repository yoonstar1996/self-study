package calendarExample;

import java.util.Calendar;

public class CalendarEx01 {
  public static void main(String[] args) {
    // 기본적으로 현재 날짜와 시간으로 설정된다.(싱글톤 패턴)
    Calendar today = Calendar.getInstance();
    // System.out.println(today);
    System.out.println("올해의 년도: " + today.get(Calendar.YEAR)); // 올해의 년도: 2024
    System.out.println("월: " + (today.get(Calendar.MONTH) + 1 )); // 월: 5
    System.out.println("올해의 몇째 주: " + today.get(Calendar.WEEK_OF_YEAR)); // 올해의 몇째 주: 19
    System.out.println("이달의 몇째 주: " + today.get(Calendar.WEEK_OF_MONTH)); // 이달의 몇째 주: 2
    System.out.println("이달의 며칠: " + today.get(Calendar.DAY_OF_MONTH)); // 이달의 며칠: 9
    System.out.println("올해의 며칠: " + today.get(Calendar.DAY_OF_YEAR)); // 올해의 며칠: 130

    System.out.println("요일(1~7), 1:일요일, " + today.get(Calendar.DAY_OF_WEEK));
    // 요일(1~7), 1:일요일, 5
    System.out.println("시간(0~23) " + today.get(Calendar.HOUR_OF_DAY));
    // 시간(0~23) 17
    System.out.println("이달의 마지막 날:  " + today.getActualMaximum(Calendar.DATE));
    // 이달의 마지막 날:  31
  }
}
