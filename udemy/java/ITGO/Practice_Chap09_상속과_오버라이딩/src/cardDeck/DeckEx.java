package cardDeck;

public class DeckEx {
  public static void main(String[] args) {
    // Deck의 생성자를 호출하면, 항상 포함된 클래스부터 생성을 먼저함.(중요)
    Deck d = new Deck();

    Card c = d.pick(0);
    
    System.out.printf("카드 섞기 전, 제일 위에 있는 카드 : ");
    System.out.println(c.toString()); // 무늬: 스페이드, 숫자: A
    
    d.shuffle();

    c = d.pick(0);

    System.out.printf("카드 섞은 후, 제일 위에 있는 카드 : ");
    System.out.println(c.toString()); // 무늬: 다이아몬드, 숫자: 4
    
    c = d.pick(); // 임의로 뽑은 카드 : 4
    System.out.println(c.toString()); // 무늬: 하트, 숫자: Q
  }
}
