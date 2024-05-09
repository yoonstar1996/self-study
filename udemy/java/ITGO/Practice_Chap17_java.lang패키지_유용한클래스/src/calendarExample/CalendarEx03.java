package calendarExample;

import java.util.Calendar;

public class CalendarEx03 {
  public static void main(String[] args) {
    Calendar today1 = Calendar.getInstance();
    Calendar today2 = Calendar.getInstance();

    // 날짜를 설정
    today1.set(2023, 05, 15);

    long diff = (today2.getTimeInMillis() - today1.getTimeInMillis()) / 1000;
    long diffDay = diff / (24 * 60 * 60);
    System.out.println("2023.05.15 ~ 2024.05.09 사이 지난 초: " + diff);
    // 2023.05.15 ~ 2024.05.09 사이 지난 초: 28425600
    
    System.out.println("2023.05.15 ~ 2024.05.09 사이 지난 일 수: " + diffDay);
    // 2023.05.15 ~ 2024.05.09 사이 지난 일 수: 329
  }
}
