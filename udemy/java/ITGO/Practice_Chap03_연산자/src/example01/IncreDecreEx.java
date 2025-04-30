package example01;

public class IncreDecreEx {
  public static void main(String[] args) {
    int x = 10;
    int y = 10;
    
    System.out.println("x : " + (x++)); // x : 10 (후위증가연산)
    System.out.println("x : " + x); // x : 11
    System.out.println("y : " + (++y)); // y : 11 (전위증가연산)
    System.out.println("y : " + y); // y : 11

    System.out.println("(x++) + (++y) : " + (x++) + (++y)); // (x++) + (++y) : 1112
    System.out.println("((x++) + (++y)) : " + ((x++) + (++y))); // ((x++) + (++y)) : 23
  }
}
