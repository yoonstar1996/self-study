package example04;

public class Time {
  // 접근 제어자(Access Modifier)의 종류
  // public : 누구나 접근 가능함
  // private : 같은 클래스 내에서만 접근 가능함
  // protected : 같은 패키지, 자손 클래스에서만 접근 가능함
  // default : 같은 패키지에서만 접근 가능함

  // 프로그래밍을 할 때, 멤버 변수는 웬만하면 private접근 제어자로 감싸주고(캡슐화)
  // 각 멤버 변수에 해당하는 getter() 메서드를 제공해주는 방법으로 클래스를 작성하는 방법이 올바르다.
  private int hour;
  private int minute;
  private int second;

  // getter() : 멤버 변수의 값을 읽어가는 메서드
  // setter() : 멤버 변수의 값을 수정하는 메서드
  public int getHour() {
    return this.hour;
  }
  public void setHour(int hour) {
    // 시에 대한 예외 처리 코드 작성
    if(hour < 0 || hour > 23) {
      System.out.println("시를 잘못 입력하셨습니다.");
      return;
    }
    this.hour = hour;
  }

  public int getMinute() {
    return this.minute;
  }
  public void setMinute(int minute) {
    // 분에 대한 예외 처리 코드 작성
    if(minute < 0 || minute > 59) {
      System.out.println("분을 잘못 입력하셨습니다.");
      return;
    }
    this.minute = minute;
  }

  public int getSecond() {
    return this.second;
  }
  public void setSecond(int second) {
    // 초에 대한 예외 처리 코드 작성
    if(second < 0 || second > 59) {
      System.out.println("초를 잘못 입력하셨습니다.");
      return;
    }
    this.second = second;
  }

  @Override
  public String toString() {
    return this.getHour() + "시 " + this.getMinute() + "분 "
    + this.getSecond() + "초";
  }
}
