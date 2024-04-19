package example03;

// Math.random()
public class RandomEx {
  public static void main(String[] args) {
    System.out.println(Math.random()); // 0.00000 ~ 0.99999사이의 값을 발생시킴.

    // 주사위 눈을 랜덤으로 발생
    int num = (int) ((Math.random() * 6) + 1 );
    System.out.println("주사위 눈 num : " + num); // 1 ~ 6

    if(num == 1) {
      System.out.println("1입니다!");
    } else if (num == 2) {
      System.out.println("2입니다!");
    } else if (num == 3) {
      System.out.println("3입니다!");
    } else if (num == 4) {
      System.out.println("4입니다!");
    } else if (num == 5) {
      System.out.println("5입니다!");
    } else {
      System.out.println("6입니다!");
    }    
  }
}