package example04;

public class Ex {
  public static void main(String[] args) {
    Outside outside = new Outside();
    Outside.Inner inner = outside.new Inner();

    inner.showInfo();
    // Inner
    // Inner-method() 호출
    // Outside
    // Outside-method() 호출

    System.out.println("-------------");

    outside.show();
    // Outside
    // Outside-method() 호출
    // Inner
    // Inner-method() 호출
  }
}
