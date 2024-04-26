package example04;

public class CarEx {
  public static void main(String[] args) {
    Car car = new Car(80);

    car.speedUp(); // 차가 90속도로 달립니다.
    car.speedDown(); // 차가 80속도로 달립니다.
    car.stop(); // 차가 멈춥니다.
    
    SportsCar sportsCar = new SportsCar(150);
    
    // 조상 클래스의 speedUp(), speedDown() 호출
    sportsCar.speedUp(); // 차가 160속도로 달립니다.
    sportsCar.speedDown(); // 차가 150속도로 달립니다.

    // 자손 클래스의 stop() 호출
    sportsCar.stop(); // 스포츠차가 멈춥니다.
  }
}
