package example02;

import java.awt.Toolkit;

public class BeepPrintEx {

	// main()는 JVM이 실행한다.
	public static void main(String[] args) {
		// 직접 생성하는 멀티 스레드 방법 3가지
		
		// 방법 1 - 구현 객체 대입
		Runnable runnable = new Beep();
		Thread thread1 = new Thread(runnable);
		thread1.start();
		
		//  방법 2 - 익명 구현 객체
		Thread thread2 = new Thread(new Runnable() {
			@Override
			public void run() {
				Toolkit toolkit = Toolkit.getDefaultToolkit();
				for(int i = 0; i < 5; i++) {
					System.out.println("비프음 실행하는 스레드명: " +
					Thread.currentThread().getName());
					
					toolkit.beep();
					
					try {
						Thread.sleep(500);
					} catch (InterruptedException e) {}
				}
			}
		});
		thread2.start();
		
		// 방법 3 - 람다식(함수적 인터페이스)
		Thread thread3 = new Thread(()-> {
			Toolkit toolkit = Toolkit.getDefaultToolkit();
			for(int i = 0; i < 5; i++) {
				System.out.println("비프음 실행하는 스레드명: " +
				Thread.currentThread().getName());
				
				toolkit.beep();
				
				try {
					Thread.sleep(500);
				} catch (InterruptedException e) {}
			}
		});
		thread3.start();
		
		for(int i = 0; i < 5; i++) {
			System.out.println("for문을 실행하는 스레드 이름:" + Thread.currentThread().getName());
			System.out.println("beep소리");
			
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {}
		}
		
		// 스레드는 한번 start()를 다 실행하고 나면, 재실행이 안된다.
		// 재실행을 하고자 한다면 아래와 같이 인스턴스를 한 개 더 만들어야 한다.(중요)
		Thread thread4 = new Thread(runnable);
		thread4.start();
	}

}
