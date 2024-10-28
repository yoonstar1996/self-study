package example05;

public class Bus implements Vehiclable {
private int speed; // 속도

  @Override
  public void run() {
    System.out.println("버스가 " + this.speed + "Km로 달립니다.");
  }

  @Override
  public void stop() {
    System.out.println("버스가 멈춥니다.");
  }

  @Override
  public void setSpeed(int speed) {
    if(speed < 0) {
      System.out.println("속도는 음수가 안됩니다.");
      return;
    }
    this.speed = speed;
  }
}
