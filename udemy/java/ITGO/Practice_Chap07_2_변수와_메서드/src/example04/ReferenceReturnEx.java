package example04;

import java.util.Arrays;

public class ReferenceReturnEx {
  public static void main(String[] args) {
    int[] ori = new int[] {10, 20, 30, 40, 50}; // 원본 배열
    int[] cloned = null; // 타겟 배열

    cloned = copy(ori, ori.length+3);
    
    // ori[]의 값 : [10, 20, 30, 40, 50]
    System.out.println("ori[]의 값 : " + Arrays.toString(ori));

    // cloned[]의 값 : [10, 20, 30, 40, 50, 0, 0, 0]
    System.out.println("cloned[]의 값 : " + Arrays.toString(cloned));

  }

  // 리턴 타입이 참조 타입인 경우
  public static int[] copy(int[] arr, int size) {
    int[] temp = new int[size];

    // 둘 중 아무거나
    // System.arraycopy(arr, 0, temp, 0, arr.length);
    for(int i = 0; i < arr.length; i++) {
      temp[i] = arr[i];
    }

    return temp;
  }
}
