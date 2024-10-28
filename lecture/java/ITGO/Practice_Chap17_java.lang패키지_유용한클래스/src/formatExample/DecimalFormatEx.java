package formatExample;

import java.text.DecimalFormat;

public class DecimalFormatEx {
  public static void main(String[] args) {
    double number = 5577669.88;

    // 0은 자릿수를 다 차지하고, #은 표현은 다 하지만 표식이 안된다.
    DecimalFormat dFormat = new DecimalFormat("0");
    System.out.println(dFormat.format(number)); // 5577670
    
    dFormat = new DecimalFormat("0.0");
    System.out.println(dFormat.format(number)); // 5577669.9

    dFormat = new DecimalFormat("000000000.0000");
    System.out.println(dFormat.format(number)); // 005577669.8800
    
    dFormat = new DecimalFormat("#");
    System.out.println(dFormat.format(number)); // 5577670
    
    dFormat = new DecimalFormat("#.#");
    System.out.println(dFormat.format(number)); // 5577669.9

    dFormat = new DecimalFormat("#########.####");
    System.out.println(dFormat.format(number)); // 5577669.88
  }
}
