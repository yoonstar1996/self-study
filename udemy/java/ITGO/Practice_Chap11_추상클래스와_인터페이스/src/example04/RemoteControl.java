package example04;

public interface RemoteControl {
  // 상수(static final)
  int MAX_VOLUME = 10;
  int MIN_VOLUME = 0;

  // 추상 메서드 3개 선언
  public void turnOn();
  public void turnOff();
  public void setVolume(int volume);
}
