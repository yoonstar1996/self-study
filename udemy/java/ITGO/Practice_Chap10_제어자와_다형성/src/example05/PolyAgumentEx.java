package example05;

public class PolyAgumentEx {
  public static void main(String[] args) {
    Buyer buyer = new Buyer();

    buyer.buy(new Tv()); // TV를 구매하셨습니다.
    buyer.buy(new Computer()); // Computer를 구매하셨습니다
    buyer.buy(new Audio()); // Audio 구매하셨습니다

    // Product와는 상관없는 클래스이기 때문
    // buyer.buy(new Apple()); // 에러 발생

    System.out.println("현재 남은 돈: " + buyer.money + "원 입니다."); // 현재 남은 돈: 220원 입니다.
    System.out.println("현재 보너스 점수: " + buyer.bonusPoint + "점 입니다."); // 현재 보너스 점수: 78점 입니다.

    // 필드의 다형성
    Product p1 = new Tv();
    Product p2 = new Computer();
    Product p3 = new Audio();
    Product[] pArray = new Product[10];
  }
}
