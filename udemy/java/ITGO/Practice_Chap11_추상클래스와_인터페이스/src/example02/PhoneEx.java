package example02;

public class PhoneEx {
  public static void main(String[] args) {
    // 추상 클래스는 인스턴스를 생성할 수 없다.
    // Phone phone = new Phone();

    // 이렇게 작성하면 SmartPhone에 있는 method에
    // 접근 불가능하기 때문에 SmartPhoe으로 해준다.
    // Phone smartPhone = new SmartPhone(240428, "Yoon", "Apple");
    SmartPhone smartPhone = new SmartPhone(240428, "Yoon", "Apple");

    smartPhone.showInfo();
    // 시리얼 넘버: 240428
    // 제조 회사: Apple
    // 소유자: Yoon

    smartPhone.turnOn(); // 스마트폰이 켜졌습니다.
    smartPhone.turnOff(); // 스마트폰이 꺼졌습니다.
    smartPhone.internetSearch(); // 네이버를 실행합니다.

    System.out.println("-------------------------");

    FolderblePhone folderblePhone = new FolderblePhone(240430, "Park", "Galaxy");

    folderblePhone.showInfo();
    // 시리얼 넘버: 240430
    // 제조 회사: Galaxy
    // 소유자: Park

    folderblePhone.turnOn(); // 폴더블 폰이 켜졌습니다.
    folderblePhone.turnOff(); // 폴더블 폰이 꺼졌습니다.
    folderblePhone.foldOn(); // 폴드 기능이 사용됩니다.

    Phone[] p = new Phone[10];
    p[0] = new SmartPhone(240123, "Lee", "Galaxy");
    p[1] = new FolderblePhone(240205, "Moon", "LG");

    p[0].turnOff(); // 스마트폰이 꺼졌습니다.
  }
}
