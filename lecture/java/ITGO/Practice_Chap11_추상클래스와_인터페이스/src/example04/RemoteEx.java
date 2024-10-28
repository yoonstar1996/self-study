package example04;

public class RemoteEx {
  public static void main(String[] args) {
    // 인터페이스도 일종의 조상이다. 하여 필드의 다형성이 허용된다.
    RemoteControl rAudio = new Audio();
    
    rAudio.turnOn(); // Audio를 켭니다.
    rAudio.setVolume(15);
    // Audio 볼륨의 최댓값은 10입니다.
    // 현재 Audio 볼륨: 10
    rAudio.setVolume(-5);
    // Audio 볼륨의 최솟값은 0입니다.
    // 현재 Audio 볼륨: 0
    rAudio.turnOff(); // Audio를 끕니다.
    
    RemoteControl rTv = new Television();

    rTv.turnOn(); // TV를 켭니다.
    rTv.setVolume(15);
    // TV 볼륨의 최댓값은 10입니다.
    // 현재 TV 볼륨: 10
    rTv.setVolume(-5);
    // TV 볼륨의 최솟값은 0입니다.
    // 현재 TV 볼륨: 0
    rTv.turnOff(); // TV를 끕니다.
  }
}
