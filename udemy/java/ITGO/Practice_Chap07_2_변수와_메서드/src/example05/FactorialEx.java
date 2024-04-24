package example05;

public class FactorialEx {
  public static void main(String[] args) {
    int num = 5;
    long result = factorial(num);

    System.out.println(num + "!의 값 : " + result); // num!의 값 : 120
    
  }

  public static long factorial(long n) {
    long result = 0l;

    // n이 1일 때, 재귀 호출이 더 이상 안이루어진다. f(1) = 1 이니깐.
    if(n == 1) {
      result = 1;
    } else {
    // result값 : 0, n값 : 5
    // result값 : 0, n값 : 4
    // result값 : 0, n값 : 3
    // result값 : 0, n값 : 2
      System.out.println("result값 : " + result + ", n값 : " + n);
      result = n * factorial(n-1); // 재귀 호출이 직접적으로 이루어지는 곳
    }

    return result;
  }
}
