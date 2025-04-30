package example03;

public class CarEx {
  public static void main(String[] args) {
    Car car = null;
    SportsCar sc1 = new SportsCar();
    SportsCar sc2 = null;
    PoliceCar pc = new PoliceCar();


    sc1.speedUp(); // 속도를 올립니다.

    car = sc1; // 자손 --> 조상(업 캐스팅)
    // car의 근본은 Car, speed()가 존재하지 않기 때문에 에러 발생
    // car.speedUp();

    // 다운 캐스팅을 할 때, 반드시 명시적 형변환 코드를 작성해야한다.
    sc2 = (SportsCar) car; // 조상 --> 조상(다운 캐스팅)
    sc2.speedUp(); // 속도를 올립니다.

    // SportsCar와 SportsCar는 서로 상속 관계가 아니기 때문에
    // 명시적 형변환 코드를 작성해도 에러가 발생한다.
    // sc1 = (SportsCar) pc;
  }
}
