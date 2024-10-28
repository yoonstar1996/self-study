package example03;

// 조상 클래스
public class HddDisk {
  // 멤버 변수
  int capacity; // 용량
  int rpm; // 속도

  // 생성자
  public HddDisk() {
    
  }

  // 매개변수가 있는 생성자
  public HddDisk(int capacity, int rpm) {
    this.capacity = capacity;
    this.rpm = rpm;
  }

  // HddDisk의 사용자 정의 메서드
  public String status() {
    String str = "하드디스크의 용량 : " + this.capacity + ", " +
                  "하드디스크의 속도 : " + this.rpm + "(rpm)";
    return str;
  }
}
