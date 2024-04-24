package example02;

public class CalculatorEx {
  public static void main(String[] args) {
    Calculator cal = new Calculator();

    // 인스턴스 메서드 호출
    int addResult = cal.add(10, 5);
    System.out.println(addResult); // 15
    
    int subResult = cal.substract(10, 5);
    System.out.println(subResult); // 5
    
    // static 메서드 호출
    int mulResult = Calculator.multiple(10, 5);
    System.out.println(mulResult); // 50
    
    double divResult = Calculator.divide(10, 5);
    System.out.println(divResult); // 2.0

    // static 메서드의 예시
    // Integer.parseInt(null);
    // Math.random();
  }
}
