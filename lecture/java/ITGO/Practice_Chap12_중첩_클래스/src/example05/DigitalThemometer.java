package example05;

// 중첩 인터페이스를 구현한 클래스
public class DigitalThemometer implements Thermometer.TemperatureChangable {
  int temperature = 20;

  @Override
  public void OnChange() {
    System.out.println("전자 온도계입니다.");
    System.out.println(this.temperature + "도 입니다.");
  }
}
