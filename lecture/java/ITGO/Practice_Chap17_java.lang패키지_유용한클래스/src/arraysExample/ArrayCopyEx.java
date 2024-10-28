package arraysExample;

import java.util.Arrays;

public class ArrayCopyEx {
  public static void main(String[] args) {
    int[] arr = new int[] {10, 20, 30, 40};

    // 배열 복사 방법 - 1. copyOf()
    int[] cloned1 = Arrays.copyOf(arr, arr.length);
    System.out.println(Arrays.toString(cloned1)); // [10, 20, 30, 40]
    
    // 배열 복사 방법 - 2. copyOfRange()
    int[] cloned2 = Arrays.copyOfRange(arr, 1, 3);
    System.out.println(Arrays.toString(cloned2)); // [20, 30]
    
    // 배열 복사 방법 - 3. arraycopy()
    int[] cloned3 = new int[5];
    System.arraycopy(arr, 0, cloned3, 0, 2);
    System.out.println(Arrays.toString(cloned3)); // [10, 20, 0, 0, 0]
  }
}
