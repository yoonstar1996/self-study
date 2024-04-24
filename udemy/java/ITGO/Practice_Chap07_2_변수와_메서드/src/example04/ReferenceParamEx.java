package example04;

class A {
  int data;
}

public class ReferenceParamEx {
  public static void main(String[] args) {
    A a = new A();
    a.data = 77;

    System.out.println("dataChange() 호출 전");
    System.out.println("main()메서드 내 data 값 : " + a.data); // main()메서드 내 data 값 : 77

    // Call by Reference(주소에 의한 호출)
    // 동생한테 "시계가 어딨어?"라고 물어보는 형태라서 값을 읽고 수정도 할 수 있다.
    ReferenceParamEx.dataChange(a); // dataChange()메서드 내 a.data 값 : 44

    System.out.println("dataChange() 호출 후");
    System.out.println("main()메서드 내 data 값 : " + a.data); // main()메서드 내 data 값 : 44
  }

  public static void dataChange(A a) {
    // a라는 주솟값은 매개변수로 넘어왔기 때문에 주소를 공유한다.
    // a라는 주소를 공유하게 되면 호출한 곳에서 영향을 무조건 받는다.
    a.data = 44;
    System.out.println("dataChange()메서드 내 a.data 값 : " + a.data);
  }
}
