package example05;

public class Thermometer {
  // 중첩 인터페이스 선언
  interface TemperatureChangable {
    public void OnChange();
  }

  TemperatureChangable changable;

  // 매개변수 타입이 인터페이스 타입으로 들어왔다.
  // 이것은 TemperatureChangable 인터페이스를 구현한 클래스만 매개변수로 들어올 수 있다.
  // 인터페이스 매개변수의 다형성
  public void setChangable(TemperatureChangable changable) {
    this.changable = changable;
  }

  public void viewTemperature() {
    this.changable.OnChange();
  }
}
