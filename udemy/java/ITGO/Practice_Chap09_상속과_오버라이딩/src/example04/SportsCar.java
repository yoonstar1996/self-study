package example04;

public class SportsCar extends Car {

  public SportsCar() {

  }

  public SportsCar(int speed) {
    this.speed = speed;
  }

  @Override
  public void stop() {
    System.out.println("스포츠차가 멈춥니다.");
  }
}
