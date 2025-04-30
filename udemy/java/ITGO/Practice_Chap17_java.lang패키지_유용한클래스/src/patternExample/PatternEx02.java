package patternExample;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Vector;

public class PatternEx02 {
  public static void main(String[] args) {
    String[] data = {
      "bat", "baby", "bonus", "ca", "cb", "c.", "car", "com", "date", "zoo", "disc"
    };

    // 소문자 c로 시작하는 영어 단어나 문자를 패턴으로 정의
    Pattern pattern = Pattern.compile("c[a-z]*");

    Vector<String> vector = new Vector<String>();

    for(String str : data) {
      Matcher matcher = pattern.matcher(str);

      // 정의 패턴과 일치하는지 확인
      if(matcher.matches()) {
        System.out.println(str);
        // ca
        // cb
        // car
        // com
        
        vector.add(str);
      }
    }
    System.out.println();
    System.out.println("c로 시작하는 소문자 영단어:" + vector.toString());
    // c로 시작하는 소문자 영단어:[ca, cb, car, com]
  }
}