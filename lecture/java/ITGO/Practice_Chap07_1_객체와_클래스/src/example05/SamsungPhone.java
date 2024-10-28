package example05;

public class SamsungPhone {
  private String company;
  private String model;
  private String color;
  private int release;

  // getter(), setter() 구현
  public String getCompany() {
    return company;
  }
  public void setCompany(String company) {
    if(!company.equals("삼성")) {
      System.out.println("삼성회사 제품이 아닙니다");
      return;
    } else {
      this.company = company;
    }
  }

  public String getModel() {
    return model;
  }
  public void setModel(String model) {
    if(!(model.equals("갤럭시22") || model.equals("갤럭시22+"))) {
      System.out.println("삼성 모델이 아닙니다");
      return;
    } else {
      this.model = model;
    }
  }

  public String getColor() {
    return color;
  }
  public void setColor(String color) {
      this.color = color;
  }

  public int getRelease() {
    return release;
  }
  public void setRelease(int release) {
      this.release = release;
  }

  @Override
  public String toString() {
    return this.getCompany() + "회사의 " + this.getModel() + "모델 이며, 출시일은"
      + this.getRelease() + "년 입니다. 색상은 " + this.getColor() + "색 입니다.";
  }
}
