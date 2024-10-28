package example03;

public class Product {
  static int number = 0;
  int countNum;
  int[] iarr = new int[3];

  // 정적 초기화
  static {
    System.out.println("정적 초기화 블록 호출됨");
  }

  // 인스턴스 초기화 블록(정적 멤버 사용할 수 있음)
  {
    System.out.println("인스턴스 초기화 블록 호출됨");
    ++number;
    this.countNum = Product.number;
    // 복잡한 초기화 같은 경우는 초기화 블록 실행문을 작성하면 가독성이 좋아진다.
    for(int i = 0; i < iarr.length; i++) {
      this.iarr[i] = (int) (Math.random() * 10 + 1);
    }
  }

  public Product() {
    System.out.println("기본 생성자 호출됨");
  }
} 