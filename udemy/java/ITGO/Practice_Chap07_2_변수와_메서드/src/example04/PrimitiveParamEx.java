package example04;

class A {
  int data;
}

public class PrimitiveParamEx {
  public static void main(String[] args) {
    A a = new A();
    a.data = 77;

    // 아래 메서드 호출은 실제 값을 넘기고 있다.(call by value)
    // 즉, dataChange(int data)의 매개변수로 복사가 되어지고 있다.
    System.out.println("dataChange() 호출 전");
    System.out.println("main()메서드 내 data 값 : " + a.data); // main()메서드 내 data 값 : 77

    // Call by Value(값에 의한 복사)
    // 동생한테 "몇 시야?"라고 물어보는 형태라서 값만 읽을 수 있다.
    PrimitiveParamEx.dataChange(a.data); // dataChange()메서드 내 data 값 : 44

    System.out.println("dataChange() 호출 후");
    System.out.println("main()메서드 내 data 값 : " + a.data); // main()메서드 내 data 값 : 77
  }

  public static void dataChange(int data) {
    // 지역변수 data라는 값은 값 복사가 이루어졌기 때문에
    // 호출한 곳에서 아무런 영향을 받지 않는다.
    data = 44;
    System.out.println("dataChange()메서드 내 data 값 : " + data);
  }
}
