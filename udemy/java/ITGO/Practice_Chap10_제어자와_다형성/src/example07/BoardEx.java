package example07;

import java.util.Vector;

public class BoardEx {
  public static void main(String[] args) {
    Vector vector = new Vector();

    System.out.println("용량 : " + vector.capacity()); // 용량 :  10
    System.out.println("저장된 객체 수 : " + vector.size()); // 저장된 객체 수 : 0
    
    vector.add(new Board("제목1", "내용1", "저자1"));
    vector.add(new Board("제목2", "내용2", "저자2"));
    vector.add(new Board("제목3", "내용3", "저자3"));
    vector.add(new Board("제목4", "내용4", "저자4"));
    vector.add(new Board("제목5", "내용5", "저자5"));
    vector.add(new Board("제목6", "내용6", "저자6"));
    vector.add(new Board("제목7", "내용7", "저자7"));
    vector.add(new Board("제목8", "내용8", "저자8"));
    vector.add(new Board("제목9", "내용9", "저자9"));
    vector.add(new Board("제목10", "내용10", "저자10"));
    vector.add(new Board("제목11", "내용11", "저자11"));

    System.out.println("용량 : " + vector.capacity()); // 용량 :  20
    System.out.println("저장된 객체 수 : " + vector.size()); // 저장된 객체 수 : 11
    
    vector.remove(2);
    vector.remove(3);
    vector.remove(5);

    System.out.println("용량 : " + vector.capacity()); // 용량 :  20
    System.out.println("저장된 객체 수 : " + vector.size()); // 저장된 객체 수 : 8

    System.out.println("----------------------------");
    // 제목: 제목1
    // 내용: 내용1
    // 작성자: 저자1

    // 제목: 제목2
    // 내용: 내용2
    // 작성자: 저자2

    // 제목: 제목4
    // 내용: 내용4
    // 작성자: 저자4

    // 제목: 제목6
    // 내용: 내용6
    // 작성자: 저자6

    // 제목: 제목7
    // 내용: 내용7
    // 작성자: 저자7

    // 제목: 제목9
    // 내용: 내용9
    // 작성자: 저자9

    // 제목: 제목10
    // 내용: 내용10
    // 작성자: 저자10

    // 제목: 제목11
    // 내용: 내용11
    // 작성자: 저자11
    
    for(int i = 0; i < vector.size(); i++) {
      if(vector.get(i) instanceof Board) {
        Board board = (Board) (vector.get(i));
        board.show();
        System.out.println();
      }
    }
  }
}
