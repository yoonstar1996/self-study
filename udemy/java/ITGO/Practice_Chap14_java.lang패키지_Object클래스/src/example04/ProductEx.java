package example04;

public class ProductEx {
  public static void main(String[] args) {
    Product original = new Product("11", "TV", 300, new int[] {10, 20}, new Apple(500));

    Product cloned = original.getProduct(); // 얕은 복제를 한 객체를 리턴

    System.out.println(original.toString());
    // 상품 아이디: 11
    // 상품 이름: TV
    // 상품 가격: 300
    // 배열: [10, 20]
    // Apple값: 500
    
    System.out.println();

    System.out.println(cloned.toString());
    // 상품 아이디: 11
    // 상품 이름: TV
    // 상품 가격: 300
    // 배열: [10, 20]
    // Apple값: 500
    
    int[] arr1 = cloned.getArr();
    arr1[0] = 45;
    int[] arr2 = original.getArr();

    Apple apple = cloned.getApple();
    apple.price = 800;
    
    System.out.println();
    
    System.out.println(original.toString());
    // 상품 아이디: 11
    // 상품 이름: TV
    // 상품 가격: 300
    // 배열: [45, 20]
    // Apple값: 500
    
    System.out.println();
    
    System.out.println(cloned.toString());
    // 상품 아이디: 11
    // 상품 이름: TV
    // 상품 가격: 300
    // 배열: [45, 20]
    // Apple값: 800

    System.out.println("배열주소(원본객체)" + arr2); // 배열주소(원본객체)[I@754ba872
    System.out.println("배열주소(복제객체)" + arr1); // 배열주소(복제객체)[I@4dfa3a9d
  }
}
