package example01;

public class ClassCastEx {

  static class A {}
  static class B extends A {}
  static class C extends A {}

  interface I {}
  static class D implements I {}
  static class E implements I {}

  public static void main(String[] args) {
    A a = new B();
    B b = (B) a;
    System.out.println("실행 완료1"); // 실행 완료
    
    System.out.println("-------------------");
    
    A a2 = new B();
    // C c = (C) a2; // 예외
    // Exception in thread "main" java.lang.ClassCastException: class example01.ClassCastEx$B cannot be cast to class example01.ClassCastEx$C (example01.ClassCastEx$B and example01.ClassCastEx$C are in module Parctice_Chap13_예외처리 of loader 'app')
    // at Parctice_Chap13_예외처리/example01.ClassCastEx.main(ClassCastEx.java:15)
    // System.out.println("실행 완료2");
    
    System.out.println("-------------------");
    
    I i = new D();
    D d = (D) i;
    System.out.println("실행 완료3"); // 실행 완료3
    
    System.out.println("-------------------");
    
    I i2 = new D();
    E e = (E) i2; // 예외
    // Exception in thread "main" java.lang.ClassCastException: class example01.ClassCastEx$D cannot be cast to class example01.ClassCastEx$E (example01.ClassCastEx$D and example01.ClassCastEx$E are in module Parctice_Chap13_예외처리 of loader 'app')
    // at Parctice_Chap13_예외처리/example01.ClassCastEx.main(ClassCastEx.java:35)
    // System.out.println("실행 완료4");
  }
  
}