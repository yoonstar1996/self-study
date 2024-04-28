package example04;

public class Audio implements RemoteControl{
  private int volume;

  @Override
  public void turnOn() {
    System.out.println("Audio를 켭니다.");
  }

  @Override
  public void turnOff() {
    System.out.println("Audio를 끕니다.");
  }

  @Override
  public void setVolume(int volume) {
    if(volume > RemoteControl.MAX_VOLUME) {
      System.out.println("Audio 볼륨의 최댓값은 10입니다.");
      this.volume = RemoteControl.MAX_VOLUME;
    } else if(volume < RemoteControl.MIN_VOLUME) {
      System.out.println("Audio 볼륨의 최솟값은 0입니다.");
      this.volume = RemoteControl.MIN_VOLUME;
    } else {
      this.volume = volume;
    }

    System.out.println("현재 Audio 볼륨: " + this.volume);
  }
}
