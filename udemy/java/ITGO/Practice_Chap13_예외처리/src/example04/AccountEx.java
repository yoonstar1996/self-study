package example04;

public class AccountEx {
  public static void main(String[] args) {
    Account account = new Account();
    account.deposit(5000);

    System.out.println("현재 잔액: " + account.getBalance()); // 현재 잔액: 5000
    
    try {
      account.withdraw(1000);
      System.out.println("현재 잔액: " + account.getBalance()); // 현재 잔액: 4000
      
      account.withdraw(10000); // 예외
      System.out.println("현재 잔액: " + account.getBalance());
    } catch (BalanceException e) {
      System.out.println("예외 원인: " + e.getMessage()); // 예외 원인: 잔액이 부족합니다.
      // e.printStackTrace();
    } finally {
      System.out.println("정상 종료됩니다."); // 정상 종료됩니다.
    }
  }
}
