package example05;

// 독립 클래스
public class Buyer {
  int money = 1000; // 소유 금액
  int bonusPoint = 0; // 소유 보너스 점수

  // 아래와 같이 프로그램을 하다보면 코드의 길이는 무한정 늘어날 것이며,
  // 쓸모없는 코드들이 나오는 형태로 될 것.

  public void buy(Tv tv) {
    // 구매자가 가진 돈보다 제품의 가격이 비싼경우
    if(this.money < tv.price) {
      System.out.println("잔액이 부족하여, 물건 구입이 안됩니다.");
      return;
    }

    this.money -=  tv.price;
    this.bonusPoint += tv.bonusPoint;
    System.out.println(tv + "를 구매하셨습니다.");
  }

  public void buy(Computer computer) {
    // 구매자가 가진 돈보다 제품의 가격이 비싼경우
    if(this.money < computer.price) {
      System.out.println("잔액이 부족하여, 물건 구입이 안됩니다.");
      return;
    }

    this.money -=  computer.price;
    this.bonusPoint += computer.bonusPoint;
    System.out.println(computer + "를 구매하셨습니다.");
  }

  public void buy(Audio audio) {
    // 구매자가 가진 돈보다 제품의 가격이 비싼경우
    if(this.money < audio.price) {
      System.out.println("잔액이 부족하여, 물건 구입이 안됩니다.");
      return;
    }

    this.money -=  audio.price;
    this.bonusPoint += audio.bonusPoint;
    System.out.println(audio + "를 구매하셨습니다.");
  }
  
  // 여기서 매개변수 Product타입이 왔다는 것은
  // Product이거나 그의 자손들이 다 들어올 수 있는 것을 의미한다.(매개변수의 다형성)
  public void buy(Product product) {
    // 구매자가 가진 돈보다 제품의 가격이 비싼경우
    if(this.money < product.price) {
      System.out.println("잔액이 부족하여, 물건 구입이 안됩니다.");
      return;
    }

    this.money -=  product.price;
    this.bonusPoint += product.bonusPoint;
    System.out.println(product + "를 구매하셨습니다.");
  }
}
