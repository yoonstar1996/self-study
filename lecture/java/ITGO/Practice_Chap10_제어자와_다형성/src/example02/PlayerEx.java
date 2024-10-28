package example02;

public class PlayerEx {
  public static void main(String[] args) {

    // 다형성 미적용 코드
    Player player1 = new Player("Yoon", 29, 20, 60);
    // 이름: Yoon
    // 나이: 29
    // 등번호: 20
    // 속도: 60
    player1.info();

    // 다형성 적용 코드(필드의 다형성)
    Player player2 = new Striker("Lee", 30, 17, 65, 5);
    // 이름: Lee
    // 나이: 30
    // 등번호: 17
    // 속도: 65
    // 유효 슛팅: 5 // 메서드에서 오버라이딩을 했기 때문에
    player2.info();
    // 근본이 Player기 때문에 Striker에 있는 getShoot()에 접근이 안된다.
    // player2.getShoot();

    // 다형성 적용 코드
    Player player3 = new MidFielder("Park", 35, 5, 40, 14);
    // 이름: Park
    // 나이: 35
    // 등번호: 5
    // 속도: 40
    // 패스 횟수: 14
    player3.info();
  }
}
