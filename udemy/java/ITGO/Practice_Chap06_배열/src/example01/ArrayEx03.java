package example01;

import java.util.Arrays;

// array문
public class ArrayEx03 {
  public static void main(String[] args) {
    // 40바이트가 heap에 생성
    int[] arr1 = new int[10];

    System.out.println("arr1의 주소 값 : " + arr1); // arr1의 주소 값 : [I@49097b5d

    // arr1배열에 1~10 사이의 난수를 대입
    for(int i = 0; i < arr1.length; i++) {
      arr1[i] = (int) (Math.random() * 10) + 1;
    }

    for(int i = 0; i < arr1.length; i++) {
      if(i == 9) {
        System.out.print(arr1[i]);
      } else {
        System.out.print(arr1[i] + ", ");
      }
    }
    System.out.println();

    // Arrays클래스는 배열을 조작하기 쉽게 만들어 놓은 유틸리티 클래스
    System.out.println(Arrays.toString(arr1));
    
    // 6바이트가 heap에 생성
    char[] chArr = new char[] {'a', 'b', 'c'};

    System.out.println("chArr의 주소 값 : " + chArr.toString()); // chArr의 주소 값 : [C@1a6c5a9e

    System.out.println(Arrays.toString(chArr));
  }
}
