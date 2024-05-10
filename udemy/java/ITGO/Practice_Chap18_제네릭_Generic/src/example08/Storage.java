package example08;

public class Storage<T> implements Storable<T> {

  private T[] arr;

  @SuppressWarnings("unchecked")
  public Storage(int size) {
    // this.arr = new T[size];
    this.arr = (T[]) new Object[size];
  }

  @Override
  public void add(T item, int index) {
    this.arr[index] = item;
  }

  @Override
  public T get(int index) {
    return this.arr[index];
  }

  public T[] getT() {
    return this.arr;
  }
}
