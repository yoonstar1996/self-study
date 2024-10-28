package example03;

public class instanceOf {
  public static void main(String[] args) {
    
    // eclipse에서 Ctrl + T: 상속 계층도를 볼 수 있는 단축키
    SportsCar sc = new SportsCar();

    if(sc instanceof SportsCar) {
      System.out.println("SportsCar로 타입 변환이 가능합니다.");
    }
    if(sc instanceof Car) {
      System.out.println("Car로 타입 변환이 가능합니다.");
    }
    if(sc instanceof Object) {
      System.out.println("Object로 타입 변환이 가능합니다.");
    }
    // 에러 발생
    // if(sc instanceof PoliceCar) {
    //   System.out.println("PoliceCar로 타입 변환이 가능합니다.");
    // }

    // SportsCar로 타입 변환 가능합니다.
    // Car로 타입 변환 가능합니다.
    // Object로 타입 변환 가능합니다.
  }
}
