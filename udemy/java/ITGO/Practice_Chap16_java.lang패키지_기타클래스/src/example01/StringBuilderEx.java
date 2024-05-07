package example01;

public class StringBuilderEx {
  public static void main(String[] args) {
    // StringBuilder, StringBuffer클래스는 버퍼(임시 저장 메모리)를 이용하기 때문에
    // 새로운 인스턴스가 생성되는 것이 아니라, 하나의 인스턴스를 가지고 문자열을 조작할 수 있다.
    StringBuilder sBuilder = new StringBuilder("JAVA");
    System.out.println(sBuilder); // JAVA
    System.out.println(sBuilder.hashCode()); // 226710952
    
    sBuilder.append(" Program");
    System.out.println(sBuilder); // Java Program
    System.out.println(sBuilder.hashCode()); // 226710952

    sBuilder.insert(1, "나");
    System.out.println(sBuilder); // J나AVA Program
    
    sBuilder.insert(1, 100);
    System.out.println(sBuilder); // J100나AVA Program

    sBuilder.setCharAt(0, 'R');
    System.out.println(sBuilder); // R100나AVA Program

    sBuilder.reverse();
    System.out.println(sBuilder); // margorP AVA나001R

    sBuilder.delete(0, 3);
    System.out.println(sBuilder); // gorP AVA나001R

    int length = sBuilder.length();
    System.out.println("총 문자 수: " + length); // 총 문자 수: 13
  }
}