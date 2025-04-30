package example03;

public class MonitorEx {
  public static void main(String[] args) {
    // monitor 참조 변수는 리모컨과 같은 것이라고 생각하자.
    Monitor monitor = new Monitor();

    System.out.println(monitor.toString()); // 현재 채널 : 0, 현재 볼륨 : 0
    
    monitor.channel = 5;
    
    monitor.power(); // 모니터가 켜졌습니다.
    
    monitor.channelUp(); // 현재 채널 : 6
    monitor.channelUp(); // 현재 채널 : 7
    monitor.channelDown(); // 현재 채널 : 6
    monitor.volumeUp(); // 현재 볼륨 : 1
    
    monitor.power(); // 모니터가 꺼졌습니다.
    
    System.out.println(monitor.toString()); // 현재 채널 : 6, 현재 볼륨 : 1
  }
}
