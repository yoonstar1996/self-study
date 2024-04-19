package example02;

public class DefaultTypeEx {
  public static void main(String[] args) {
    byte a1 = 120;
    byte a2 = 1;

    // byte b3 = a1 + a2; // byte + byte = int + int = int
    int a3_1 = (a1 + a2);
    // or
    byte a3_2 = (byte) (a1 + a2);

    System.out.println("a3_1 : " + a3_1); // a3_1 : 121
    System.out.println("a3_2 : " + a3_2); // a3_2 : 121
    
    byte b1 = 127;
    byte b2 = 1;

    int b3_1 = (b1 + b2);
    byte b3_2 = (byte) (b1 + b2);

    System.out.println("b3_1 : " + b3_1); // b3_1 : 128
    System.out.println("b3_2 : " + b3_2); // b3_2 : -128

    char ch = 'A'; // A는 아스키코드 값으로 65
    int i1 = ch + b2;

    System.out.println("i : " + i1); // 66

    float f1 = 15.5f;
    // int i2 = f1 + b1; // float + int = float + float = float
    float i2 = f1 + b1;
    System.out.println("i2 : " + i2); // i2 : 142.5

    double d1 = 10.5;

    // float i3 = f1 + d1; // float + double = double + double = double
    double i3 = f1 + d1;
    System.out.println("i3 : " + i3); // i3 : 26.0
  }
}
