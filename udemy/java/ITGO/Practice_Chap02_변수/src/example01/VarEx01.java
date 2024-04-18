package example01;

public class VarEx01 {

	public static void main(String[] args) {
		char ch = 'A';
		int age = 29;
		long long1 = 10;
		// F는 float를 지정하기 위해서 접미사 f,F를 붙였다.
		float float1 = 10.1f;
		double double1 = 9.99;

		System.out.println("ch : " + ch);
		System.out.println("age : " + age);
		System.out.println("long1 : " + long1);
		System.out.println("float1 : " + float1);
		System.out.println("double1 : " + double1);

		String str = new String("자바");
		System.out.println("str : " + str);
		System.out.println("str.toString() : " + str.toString());

		// 사용자 정의 클래스 이거나 toString() 재정의를 하지 않은 클래스의 참조변수는 출력을 하게 되면, 클래스타입@16진수(주소)가 나온다.
		Object obj1 = new Object();
		System.out.println("obj1 : " + obj1);
		System.out.println("obj1.toString()" + obj1.toString());
	}
}
