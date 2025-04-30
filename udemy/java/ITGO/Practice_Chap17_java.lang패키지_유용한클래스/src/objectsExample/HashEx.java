package objectsExample;

public class HashEx {
  public static void main(String[] args) {
    Person person1 = new Person(29, "Yoon", new int[] {180, 75});
    Person person2 = new Person(29, "Yoon", new int[] {180, 75});

    int[] arr1 = new int[] {180, 75};
    int[] arr2 = new int[] {180, 75};

    System.out.println(person1.hashCode()); // 2102931215
    System.out.println(person2.hashCode()); // 2102931215

    System.out.println();

    System.out.println(arr1.hashCode()); // 1157740463
    System.out.println(arr2.hashCode()); // 1379435698
  }
}
