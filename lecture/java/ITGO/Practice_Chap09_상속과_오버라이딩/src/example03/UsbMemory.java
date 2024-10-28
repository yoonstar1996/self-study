package example03;

public class UsbMemory extends HddDisk {

  // 멤버 변수
  int capacity;
  int rpm;


  // 생성자
  public UsbMemory() {
    
  }

  // 매개변수가 있는 생성자
  public UsbMemory(int capacity, int rpm) {
    this.capacity = capacity;
    this.rpm = rpm;
  }

  // 오버로딩
  public String status(int i) {
    String str = "USB의 용량 : " + i + ", " +
                  "USB의 속도 : " + this.rpm + "(rpm)";
    return str;
  }

  // 조상 클래스의 메서드를 오버라이딩함.
  @Override
  public String status() {
    String str = "USB의 용량 : " + this.capacity + ", " +
                  "USB의 속도 : " + this.rpm + "(rpm)";
    return str;
  }
}
