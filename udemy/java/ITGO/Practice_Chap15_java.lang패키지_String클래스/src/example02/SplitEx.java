package example02;

import java.util.Arrays;

public class SplitEx {
  public static void main(String[] args) {
    String str1 = "사과, 바나나, 포도, 키위, 오렌지";
    String[] arr = str1.split(",");
    System.out.println(Arrays.toString(arr)); // [사과,  바나나,  포도,  키위,  오렌지]
  }
}
