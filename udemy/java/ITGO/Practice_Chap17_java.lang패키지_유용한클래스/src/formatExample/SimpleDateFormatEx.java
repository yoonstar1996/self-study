package formatExample;

import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleDateFormatEx {
  public static void main(String[] args) {
    Date date = new Date();
    System.out.println(date.toString()); // Thu May 09 16:07:12 KST 2024

    SimpleDateFormat sFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    System.out.println(sFormat.format(date)); // 2024-05-09 16:08:27

    sFormat = new SimpleDateFormat("오늘은 E요일");
    System.out.println(sFormat.format(date)); // 오늘은 목요일

    sFormat = new SimpleDateFormat("오늘은 올해의 D번째 날");
    System.out.println(sFormat.format(date)); // 오늘은 올해의 130번째 날

    sFormat = new SimpleDateFormat("이달의 d번째 날");
    System.out.println(sFormat.format(date)); // 이달의 9번째 날
  }
}
