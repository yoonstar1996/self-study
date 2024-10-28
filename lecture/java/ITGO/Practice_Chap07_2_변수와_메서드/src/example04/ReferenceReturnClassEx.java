package example04;

class Data {
  int data;
}

public class ReferenceReturnClassEx {
  public static void main(String[] args) {
    Data ori = new Data();
    ori.data = 100;
    
    System.out.println("ori의 주소 : " + ori); // ori의 주소 : example04.Data@d8355a8

    Data cloned = copy(ori);

    System.out.println("cloned 주소 : " + cloned); // cloned 주소 : example04.Data@5b275dab

    System.out.println(cloned.data); // 100

  }

  public static Data copy(Data d) {
    System.out.println("d의 주소 : " + d); // d의 주소 : example04.Data@d8355a8
    Data temp = new Data();
    temp.data = d.data;
    System.out.println("temp의 주소 : " + temp); // temp의 주소 : example04.Data@5b275dab

    return temp; // Data클래스의 주소를 넘기고 있다.
  }
}
