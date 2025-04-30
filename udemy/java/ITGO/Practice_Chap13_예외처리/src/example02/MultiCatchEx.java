package example02;

import java.util.Arrays;

public class MultiCatchEx {
  public static void main(String[] args) {
    try {
      int[] arr = new int[3];
      System.out.println(Arrays.toString(arr));

      arr[3] = 100; // 예외 발생
      int result = 10 / 0; // 예외 발생

    }
    // catch(Exception e) { // Exception은 최고 조상이기 때문에, 아래 catch구문에 도달할 수 없다.
    //   System.out.println("예외 발생");
    // }
    catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("배열의 인덱스를 초과하였습니다.");
    } catch (ArithmeticException e) {
      System.out.println("0으로 나눌 수 없습니다.");
    } finally {
      System.out.println("종료");
    }
  }
}
