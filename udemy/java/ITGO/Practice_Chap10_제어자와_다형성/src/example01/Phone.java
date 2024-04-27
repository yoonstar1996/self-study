package example01;

public class Phone {
  // 멤버 변수, 외부로부터 접근 막음.
  protected String model;
  String color;
  private String company;

  // 매개변수가 있는 생성자
  public Phone(String model, String color, String company) {
    this.model = model;
    this.color = color;
    this.company = company;
  }

  // getter() 제공
  public String getModel() {
    return model;
  }

  public String getColor() {
    return color;
  }

  public String getCompany() {
    return company;
  }

  @Override
  public String toString() {
    String str = "모델: " + this.getModel() + ", 색상: " +
                  this.getColor() + ", 회사 : " + this.getCompany();
    return str;
  }
}
