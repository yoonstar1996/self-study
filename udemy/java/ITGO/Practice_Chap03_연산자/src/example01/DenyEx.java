package example01;

public class DenyEx {
  public static void main(String[] args) {
    boolean power = false;

    System.out.println("power : " + power); // power : false

    power = !power;
    System.out.println("power : " + power); // power : true

    power = !power;
    System.out.println("power : " + power); // power : false
  }
}
