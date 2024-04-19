package example02;

public class BitOperatorEx {
  public static void main(String[] args) {
    int x = 8;
    int y = 5;

    System.out.println("x를 2진수로 변환 결과 : " + Integer.toBinaryString(x)); // x를 2진수로 변환 결과 : 1000
    System.out.println("y를 2진수로 변환 결과 : " + Integer.toBinaryString(y)); // x를 2진수로 변환 결과 : 101

    // &연산은 둘 다 1일 때만 1을 준다.
    // |연산은 하나라도 1이면 1을 준다.
    // ^연산은 서로 다를 때 1을 준다.
    System.out.println("x, y를 비트 &(AND) 연산 결과 : " + (x & y)); // x, y를 비트 &(AND) 연산결과 : 0
    System.out.println("x, y를 비트 |(OR) 연산 결과 : " + (x | y)); // x, y를 비트 |(OR) 연산 결과 : 13
    System.out.println("x, y를 배타적 논리합 ^(XOR) 연산 결과 : " + (x ^ y)); // x, y를 배타적 논리합 ^(XOR) 연산 결과 : 13 
  }
}
