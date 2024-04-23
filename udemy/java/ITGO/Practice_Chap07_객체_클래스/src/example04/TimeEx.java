package example04;

public class TimeEx {
  public static void main(String[] args) {
    Time t1 = new Time();
    // t1.hour = 10; // 접근 불가능

    System.out.println(t1); // 0시 0분 0초
    
    // 시간 설정
    t1.setHour(18);
    t1.setMinute(40);
    t1.setSecond(35);
    
    System.out.println(t1); // 18시 40분 35초
  }
}
