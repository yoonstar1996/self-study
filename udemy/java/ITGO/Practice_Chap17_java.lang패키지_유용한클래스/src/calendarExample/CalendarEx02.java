package calendarExample;

import java.util.Calendar;

public class CalendarEx02 {
  public static void main(String[] args) {
    Calendar today = Calendar.getInstance();
    
    int year = today.get(Calendar.YEAR);
    int month = today.get(Calendar.MONTH);
    int day = today.get(Calendar.DAY_OF_MONTH);
    int week = today.get(Calendar.DAY_OF_WEEK);

    String strWeek = null;

    switch (week) {
      case Calendar.SUNDAY:
        strWeek = "일요일";
        break;
      case Calendar.MONDAY:
        strWeek = "월요일";
        break;
      case Calendar.TUESDAY:
        strWeek = "화요일";
        break;
      case Calendar.WEDNESDAY:
        strWeek = "수요일";
        break;
      case Calendar.THURSDAY:
        strWeek = "목요일";
        break;
      case Calendar.FRIDAY:
        strWeek = "금요일";
        break;
      case Calendar.SATURDAY:
        strWeek = "토요일";
        break;
    }
    System.out.println("오늘은 " + year + "년 " + month + "월 " + day + "일 " + strWeek + "입니다.");
    // 오늘은 2024년 4월 9일 목요일입니다.
  }
}
