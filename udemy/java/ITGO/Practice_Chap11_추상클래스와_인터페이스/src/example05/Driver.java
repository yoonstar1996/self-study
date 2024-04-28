package example05;

public class Driver {
  // new Taxi() or new Bus()만 들어올 수가 있다.
  public void drive(Vehiclable vehiclable) {
    vehiclable.run();
    // System.out.println(vehiclable); // 주소 출력
  }

  public void stop(Vehiclable vehiclable) {
    vehiclable.stop();
  }

  // 리턴 타입, 매개변수 타입 모두 Vehiclable인터페이스 타입이다.
  // 그 말의 뜻은 리턴 타입도 구현 클래스가 와야하며,
  // 매개변수 타입도 역시 구현 클래스가 와야한다.
  public Vehiclable newCar(Vehiclable vehiclable) {
    if(vehiclable instanceof Taxi) {
      System.out.println("새 택시 구입");
      Taxi taxi = (Taxi) vehiclable;
      return taxi;
    } else if (vehiclable instanceof Bus) {
      System.out.println("새 버스 구입");
      Bus bus = (Bus) vehiclable;
      return bus;
    } else {
      return null;
    }
  }
}
