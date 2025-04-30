package example03;

public class HddEx {
  public static void main(String[] args) {
    HddDisk hddDisk = new HddDisk(500, 7200);
    UsbMemory usbMemory = new UsbMemory(32, 960);

    System.out.println("HDD상세");
    System.out.println(hddDisk.status()); // 하드디스크의 용량 : 500, 하드디스크의 속도 : 7200(rpm)
    
    System.out.println("USB상세");
    System.out.println(usbMemory.status()); // USB의 용량 : 32, USB의 속도 : 960(rpm)
    System.out.println(usbMemory.status(60)); // USB의 용량 : 60, USB의 속도 : 960(rpm)
  }
}
