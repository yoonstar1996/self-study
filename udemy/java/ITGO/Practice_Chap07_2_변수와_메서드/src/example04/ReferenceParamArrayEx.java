package example04;

public class ReferenceParamArrayEx {
  public static void main(String[] args) {
    int[] arr = new int[] {10, 20, 30, 40, 50};
    System.out.println("change() 호출 전의 값 : " + arr[0]); // change() 호출 전의 값 : 10
    System.out.println("main() arr의 주솟값 : " + arr); // main() arr의 주솟값 : [I@68c4039c
    
    // 배열명은 곧 주소다.
    change(arr); // change() 내의 값 : 90, change() arr의 주솟값 : [I@68c4039c

    // 이렇게도 가능
    // change(new int[] {100, 90, 80});
    
    System.out.println("change() 호출 후의 값 : " + arr[0]); // change() 호출 전의 값 : 90

    
  }
  
  public static void change(int[] arr) {
    arr[0] = 90;
    System.out.println("change() 내의 값 : " + arr[0]);
    System.out.println("change() arr의 주솟값 : " + arr);
  }
}
