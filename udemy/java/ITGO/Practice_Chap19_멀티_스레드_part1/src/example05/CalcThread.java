package example05;

public class CalcThread extends Thread {

  long sum;

  public CalcThread(String name) {
    this.setName(name);
  }

  @Override
  public void run() {
    for(int i = 0; i < 10000000; i++) {
      sum += i;
    }
    System.out.println("[작업 완료 스레드]: " + this.getName());
    System.out.println("[합계]: " + this.sum);
  }
}
