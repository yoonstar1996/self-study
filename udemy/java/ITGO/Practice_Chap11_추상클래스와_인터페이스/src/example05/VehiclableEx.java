package example05;

public class VehiclableEx {
  public static void main(String[] args) {
    Taxi taxi = new Taxi();
    Bus bus = new Bus();
    Driver driver = new Driver();

    // 직접 만든 참조변수(주소)를 넘기는것
    driver.drive(taxi); // 택시가 0Km로 달립니다.
    taxi.setSpeed(100);
    taxi.setSpeed(-50); // 속도는 음수가 안됩니다.
    driver.drive(taxi); // 택시가 100Km로 달립니다.
    driver.stop(taxi); // 택시가 멈춥니다.
    
    bus.setSpeed(40);
    driver.drive(bus); // 버스가 40Km로 달립니다.
    driver.stop(bus); // 버스가 멈춥니다.

    // 이렇게 직접 매개변수를 생성하여 넘기는 방법
    driver.drive(new Taxi()); // 택시가 0Km로 달립니다.
    driver.drive(new Bus()); // 버스가 0Km롤 달립니다.

    // AICar는 Vehiclable 인터페이스를 구현하지 않았기 때문에 에러 발생
    // driver.drive(new AICar()); // 에러

    Vehiclable taxi2 = driver.newCar(new Taxi()); // 새 택시 구입
    taxi2.run(); // 택시가 0Km로 달립니다.
  }
}
