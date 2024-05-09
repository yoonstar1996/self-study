package tokenExample;

import java.util.StringTokenizer;

public class SplitStringTokenizerEx {
  public static void main(String[] args) {
    String data = "baby   cat dog";
    // split()는 구분자를 공백으로 주면 데이터가 공백을 다수 포함하고 있다면,
    // 공백도 하나의 토큰으로 인식한다.
    String[] result = data.split(" ");
    System.out.println("토큰 갯수: " + result.length);
    for(String str : result) {
      System.out.println(str);
    }
    // 토큰 갯수: 5
    // baby


    // cat
    // dog

    System.out.println("----------");

    // StringTokenizer는 구분자를 공백으로 주면 데이터가 공백을 다수 포함하고 있다면,
    // 공백을 토큰으로 인정하지 않는다.
    StringTokenizer sTokenizer = new StringTokenizer(data, " ");
    while (sTokenizer.hasMoreTokens()) {
      System.out.println("남은 토큰 수: " + sTokenizer.countTokens());
      String str =sTokenizer.nextToken();
      System.out.println(str);
    }
    // 남은 토큰 수: 3
    // baby
    // 남은 토큰 수: 2
    // cat
    // 남은 토큰 수: 1
    // dog
  }
}
