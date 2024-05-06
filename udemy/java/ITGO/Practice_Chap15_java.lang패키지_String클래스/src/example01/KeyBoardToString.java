package example01;

import java.io.IOException;

public class KeyBoardToString {
  public static void main(String[] args) {
    byte[] bytes = new byte[100];

    System.out.print("입력 : "); // 가나다abc
    int readBytesNum = 0;

    try {
      // 키보드(표준 입력)으로부터 입력을 받고, 그 내용을 bytes에 저장을 하고
      // 입력받은 바이트 수를 리턴한다.
      readBytesNum = System.in.read(bytes);
      // EUC-KR : 한글 2byte, UTF-8 : 한글 3byte
      String str = new String(bytes, 0, readBytesNum - 2, "EUC-KR");
      System.out.println(str); // 가나다abc
      System.out.println("입력받은 바이트 수: " + readBytesNum); // 입력받은 바이트 수: 11

      byte[] b = str.getBytes("EUC-KR");
      System.out.println(b.length); // 9

    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
