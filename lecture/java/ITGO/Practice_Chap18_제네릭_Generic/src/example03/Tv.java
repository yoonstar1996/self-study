package example03;

// 일반 클래스
public class Tv {
  private int year;
  private int month;

  public Tv() {
  }

  public Tv(int year, int month) {
    this.year = year;
    this.month = month;
  }

  public int getYear() {
    return year;
  }
  public void setYear(int year) {
    this.year = year;
  }

  public int getMonth() {
    return month;
  }
  public void setMonth(int month) {
    this.month = month;
  }
}
