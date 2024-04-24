package example05;

public class SamsungPhoneEx {
  public static void main(String[] args) {
    SamsungPhone sam1 = new SamsungPhone();
    sam1.setCompany("삼성");
    sam1.setModel("갤럭시22");
    sam1.setRelease(2024);
    sam1.setColor("검정");
    
    System.out.println(sam1); // 삼성회사의 갤럭시22모델 이며, 출시일은2024년 입니다. 색상은 검정색 입니다.
    
    SamsungPhone sam2 = new SamsungPhone();
    sam2.setCompany("애플");
    sam2.setModel("아이폰14");
    sam2.setRelease(2023);
    sam2.setColor("흰");

    //삼성회사 제품이 아닙니다
    // 삼성 모델이 아닙니다
    // null회사의 null모델 이며, 출시일은2023년 입니다. 색상은 흰색 입니다.
    System.out.println(sam2);
  }
}
