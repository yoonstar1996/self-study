package example06;

public class CompactDisc extends Product{
  private String albumTitle;
  private String artist;

  public CompactDisc(int productId, String description, String maker, int price, String albumTitle, String artist) {
    super(productId, description, maker, price);
    this.albumTitle = albumTitle;
    this.artist = artist;
  }

  public String getAlbumTitle() {
    return albumTitle;
  }

  public String getArtist() {
    return artist;
  }

  @Override
  public void showInfo() {
    super.showInfo();
    System.out.println("앨범 제목: " + this.getAlbumTitle());
    System.out.println("아티스트: " + this.getArtist());
  }
}
