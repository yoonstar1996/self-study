package example02;

// 오버로딩
public class Accumulator {

  // add라는 메서드 명으로 오버로딩하고 있다.
  public int add(int x, int y) {
    System.out.println("int add(int x, int y) " + (x + y));
    return x + y;
  }
  
  // 오버로딩 X
  // public int add(int a, int b) {
  //   return a + b;
  // }
    
  public long add(int x, long y) {
    System.out.println("long add(int x, long y) : " + (x + y));
    return x + y;
  }

  public long add(long x, int y) {
    System.out.println("long add(long x, int y) : " + (x + y));
    return x + y;
  }
  
  public double add(double x, double y) {
    System.out.println("double add(double x, double y) : " + (x + y));
    return x + y;
  }
  
  // 참조형 변수를 받아서 오버로딩을 하는 케이스
  public long add(int[] arr) {
    long sum = 0l;
    for(int i : arr) {
      sum += i;
    }
    System.out.println("long add(int[] arr) : " + sum);
    return sum;
  }

  public int add(A a) {
    System.out.println("int add(A a) : " + (a.data1 + a.data2));
    return a.data1 + a.data2;
  }
}
