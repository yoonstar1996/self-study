package example01;

// 상속을 하는 이유
// 1. 공통된 코드는 조상에서 관리
// 2. 개별적인 부분은 자손에서 따로 관리
// 3. 코드의 재사용성
public class MountainBicycle extends Bicycle{
  String frame;
  int gear;
  int cost;
  String sector;

  public void print() {
    System.out.println("id : " + this.id );
    System.out.println("brand : " + this.brand );
    System.out.println("frame : " + this.frame );
    System.out.println("gear : " + this.gear );
    System.out.println("cost : " + this.cost );
    System.out.println("owner : " + this.owner );
  }

  public static void main(String[] args) {
    MountainBicycle mountainBicycle = new MountainBicycle();
    mountainBicycle.id = 1223;
    mountainBicycle.brand = "lespo";
    mountainBicycle.frame = "알루미늄";
    mountainBicycle.gear = 33;
    mountainBicycle.cost = 10000;
    mountainBicycle.owner = "Yoon";

    // id : 1223
    // brand : lespo
    // frame : 알루미늄
    // gear : 33
    // cost : 10000
    // owner : Yoon
    mountainBicycle.print();
  }
}
