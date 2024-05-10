package example08;

public interface Storable<T> {
  public void add(T item, int index);

  public T get(int index);
}
