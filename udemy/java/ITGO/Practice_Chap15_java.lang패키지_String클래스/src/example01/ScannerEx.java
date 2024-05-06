package example01;

import java.util.Scanner;
import java.util.Arrays;

public class ScannerEx {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("입력: ");
    String str = sc.nextLine();
    
    System.out.println(str); // abc

    byte[] b1 = str.getBytes();
    System.out.println(Arrays.toString(b1)); // [97, 98, 99]
    
    sc.close();
  }
}
