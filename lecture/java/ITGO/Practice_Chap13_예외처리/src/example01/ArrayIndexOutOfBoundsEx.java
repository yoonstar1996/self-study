package example01;

import java.util.Arrays;

public class ArrayIndexOutOfBoundsEx {
  public static void main(String[] args) {
    int[] arr = new int[5];

    System.out.println(Arrays.toString(arr)); // [0, 0, 0, 0, 0]

    for(int i = 0; i < 6; i++) {
      arr[i] = i; // i가 5일 때, 예외 발생 예상
      System.out.println("arr[" + i + "] = " + arr[i]);
    }
    // arr[0] = 0
    // arr[1] = 1
    // arr[2] = 2
    // arr[3] = 3
    // arr[4] = 4
    // Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
    //         at Parctice_Chap13_예외처리/example01.ArrayIndexOutOfBoundsEx.main(ArrayIndexOutOfBoundsEx.java:12)
  }
}
