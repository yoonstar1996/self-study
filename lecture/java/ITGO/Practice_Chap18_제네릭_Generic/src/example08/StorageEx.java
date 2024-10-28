package example08;

public class StorageEx {
  public static void main(String[] args) {
    Storable<String> storable = new Storage<>(5);

    for(int i = 0; i < 5; i++) {
      storable.add("마이카" +  (i+1), i);
    }

    for(int i = 0; i < 5; i++) {
      System.out.println(storable.get(i));
    }
    // 마이카1
    // 마이카2
    // 마이카3
    // 마이카4
    // 마이카5
  }
}
