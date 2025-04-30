package arraysExample;

import java.util.Arrays;
import java.util.Objects;

class Car {
  String model;

  public Car(String model) {
    this.model = model;
  }

  @Override
  public String toString() {
    return this.model;
  }
}

public class ArrayEqualsDeepEqualsEx {
  public static void main(String[] args) {
    int[] ori1 = new int[] {1, 2};
    int[] cloned1 = Arrays.copyOf(ori1, ori1.length);

    // 얕은 비교
    System.out.println(Arrays.equals(ori1, cloned1)); // true
    System.out.println(Objects.equals(ori1, cloned1)); // false
    System.out.println(ori1 + ", " + cloned1); // [I@d8355a8, [I@59fa1d9b
    
    System.out.println();
    
    Car[] c1 = new Car[2];
    c1[0] = new Car("Benz");
    c1[1] = new Car("BMW");
    Car[] c2 = Arrays.copyOf(c1, c1.length);
    
    // 얕은 비교
    System.out.println(Arrays.equals(c1, c2)); // true
    System.out.println(Objects.equals(c1, c2)); // false
    System.out.println(c1 + ", " + c2);
    // [LarraysExample.Car;@7cd62f43, [LarraysExample.Car;@6d4b1c02

    System.out.println();
    
    // 2차원 배열 생성
    int[][] ori2 = new int[][] {
      {1, 2}, {3, 4}
    };
    
    // 얕은 복사
    int[][] cloned2 = Arrays.copyOf(ori2, ori2.length);
    // 얕은 비교
    System.out.println(Arrays.equals(ori2, cloned2)); // true
    System.out.println(Arrays.deepEquals(ori2, cloned2)); // true
    System.out.println(Objects.equals(ori2, cloned2)); // false
    System.out.println(ori2 + ", " + cloned2); // [[I@6093dd95, [[I@5622fdf
    
    System.out.println();
    
    System.out.println("ori2[0]: " + ori2[0]); // ori2[0]: [I@4883b407
    System.out.println("cloned2[0]: " + cloned2[0]); // cloned2[0]: [I@4883b407
    
    System.out.println();
    
    cloned2[0][0] = 10;
    System.out.println(Arrays.deepEquals(ori2, cloned2)); // true
    System.out.println(ori2[0][0]); // 10
    System.out.println(cloned2[0][0]); // 10
    
    System.out.println();
    
    // 깊은 복사
    int[][] cloned3 = Arrays.copyOf(ori2, ori2.length);
    cloned3[0] = Arrays.copyOf(ori2[0], ori2[0].length);
    cloned3[1] = Arrays.copyOf(ori2[1], ori2[1].length);
    
    System.out.println(Arrays.equals(ori2, cloned3)); // false
    System.out.println(Arrays.deepEquals(ori2, cloned3)); // true
    System.out.println(Objects.equals(ori2, cloned3)); // false
    System.out.println(ori2 + ", " + cloned3); // [[I@6093dd95, [[I@39c0f4a

    System.out.println();
    
    cloned3[0][0] = 70;
    System.out.println(Arrays.deepEquals(ori2, cloned3)); // false
    System.out.println(ori2[0][0]); // 10
    System.out.println(cloned3[0][0]); // 70
  }
}
