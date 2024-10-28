package example02;

// 자손 클래스
public class Defender extends Player{
  private int def;

  public Defender(String name, int age, int backNumber, int speed, int def) {
    super(name, age, backNumber, speed); // Player의 생성자
    this.def = def;
  }

  public int getDef() {
    return def;
  }

  @Override
  public void info() {
    super.info(); // Player의 info를 호출
    System.out.println("방어 횟수: " + this.getDef());
  }
}
