package example02;

class A {
  int data1 = 10;
  int data2 = 30;
}

public class AccumulatorEx {
  public static void main(String[] args) {
    Accumulator ac = new Accumulator();

    ac.add(5, 10); // int add(int x, int y) 15
    ac.add(8, 10l); // long add(int x, long y) : 18
    ac.add(9l, 10); // long add(long x, int y) : 19
    ac.add(5.512, 10.2053); // double add(double x, double y) : 15.717299999999998
    ac.add(new int[] {5, 10, 9, 2, 6}); // long add(int[] arr) : 32
    ac.add(new A()); // int add(A a) : 40
  }
}
