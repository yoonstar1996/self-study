package example05;

public class ThermometerEx {
  public static void main(String[] args) {
    Thermometer thermometer = new Thermometer();

    thermometer.setChangable(new DigitalThemometer());
    thermometer.viewTemperature();
    // 전자 온도계입니다.
    // 20도 입니다.

    System.out.println("---------------");

    thermometer.setChangable(new AnalogThemometer());
    thermometer.viewTemperature();
    // 아날로그 온도계입니다.
    // 14도 입니다.

    // 중첩 인터페이스이므로 익명 구현 객체를 얻는 것은 안된다.
    // Thermometer.TemperatureChangable thermometer2 = new Thermometer.TemperatureChangable() {
      
    //   @Override
    //   public void OnChange() {
    //     System.out.println("익명 구현 객체로 만든");
    //   }
    // };
    // thermometer2.viewTemperature();
    // Thermometer t = (Thermometer) thermometer2;
    // t.viewTemperature();
  }
}
