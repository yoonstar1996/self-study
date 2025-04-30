package example01;

// array문
public class ArrayEx01 {
  public static void main(String[] args) {

    // score는 참조 변수이다.
    // score는 5개의 방을 heap에다가 생성하고 있다.(4*5바이트 = 20바이트)
    int[] score = new int[5];

    // 배열명이 곧 주소다.
    System.out.println("score의 주소 값 : " + score); // score의 주소값 : [I@49097b5d

    // score[0]은 변수와 동일하다고 보면 된다.
    score[0] = 100;

    // 배열에 값을 대입시키고 있는 형태
    for(int i = 0; i < score.length; i++) {
      score[i] = i + 1;
    }

    // 배열의 각각의 방에 있는 값을 출력하는 형태
    for(int i = 0; i < score.length; i++) {
      System.out.println("score[" + i + "] : " + score[i]);
    }
  }
}
