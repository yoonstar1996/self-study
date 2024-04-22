package example03;

import java.util.Arrays;

// 배열의 복사
public class ArrayCopy {
  public static void main(String[] args) {
    int[] original = new int[] {10, 77, 33, 50};
    int[] target = new int[10];

    System.out.println("복사하기 전");
    System.out.println(Arrays.toString(original)); // [10, 77, 33, 50]
    System.out.println(Arrays.toString(target)); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    // for문을 이용해서 직접 복사하는 방법
    for(int i = 0; i < original.length; i++) {
      target[i] = original[i];
    }
    System.out.println("복사한 후");
    System.out.println(Arrays.toString(original)); // [10, 77, 33, 50]
    System.out.println(Arrays.toString(target)); // [10, 77, 33, 50, 0, 0, 0, 0, 0, 0]

    // System.arraycopy
    System.arraycopy(original, 0, target, 5, original.length);
    System.out.println("복사한 후");
    System.out.println(Arrays.toString(original)); // [10, 77, 33, 50]
    System.out.println(Arrays.toString(target)); // [0, 0, 0, 0, 0, 10, 77, 33, 50, 0]

    // Arrays.copyOf()
    target = Arrays.copyOf(original, original.length);
    System.out.println("복사한 후");
    System.out.println(Arrays.toString(original)); // [10, 77, 33, 50]
    System.out.println(Arrays.toString(target)); // [10, 77, 33, 50]

    
  }
}
