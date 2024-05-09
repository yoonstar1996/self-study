package dateExample;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateEx {
  public static void main(String[] args) {
    // Date클래스는 TimeStamp기능으로 많이 사용한다.
    // 근태, 카드 사용 내역, 로그 정보 등
    Date today = new Date();
    System.out.println(today); // Thu May 09 16:48:52 KST 2024

    SimpleDateFormat sFormat = new SimpleDateFormat("yyyy년 MM월 dd일 a hh시mm분ss초");
    System.out.println(sFormat.format(today)); // 2024년 05월 09일 오후 04시50분09초
  }
}
