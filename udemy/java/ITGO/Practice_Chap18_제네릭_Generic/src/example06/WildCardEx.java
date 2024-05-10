package example06;

import java.util.Arrays;

public class WildCardEx {

  // ?는 "어떠한 객체도 다 받겠다."" 라는 의미
  public static void registerCourse(Course<?> course) {
    System.out.println(course.getName() + " 수강생: " + Arrays.toString(course.getStudents()));
  }

  // Student이거나 Student를 상속받는 클래스(상위 타입 제한)
  public static void registerCourseStudent(Course<? extends Student> course) {
    System.out.println(course.getName() + " 수강생: " + Arrays.toString(course.getStudents()));
  }

  // Worker클래스이거나 상위 클래스들만 들어올 수 있다.(하위 타입 제한)
  public static void registerCourseWorker(Course<? super Worker> course) {
    System.out.println(course.getName() + " 수강생: " + Arrays.toString(course.getStudents()));
  }

  public static void main(String[] args) {
    registerCourse(new Course<Person>("일반인 과정", 5));
    registerCourse(new Course<Student>("학생 과정", 10));
    registerCourse(new Course<Worker>("직장인 과정", 8));
    registerCourse(new Course<HighStudent>("고등학생 과정", 7));

    System.out.println();
    
    // registerCourseStudent(new Course<Person>("일반인 과정", 5));
    registerCourseStudent(new Course<Student>("학생 과정", 10));
    // registerCourseStudent(new Course<Worker>("직장인 과정", 8));
    registerCourseStudent(new Course<HighStudent>("고등학생 과정", 7));

    System.out.println();

    registerCourseWorker(new Course<Person>("일반인 과정", 5));
    // registerCourseWorker(new Course<Student>("학생 과정", 10));
    registerCourseWorker(new Course<Worker>("직장인 과정", 8));
    // registerCourseWorker(new Course<HighStudent>("고등학생 과정", 7));

    System.out.println();

    // 직접 Course객체를 생성해서 확인하는 과정
    Course<Person> pCourse = new Course<>("일반인 과정", 3);
    pCourse.add(new Person("Yoon"));
    pCourse.add(new Person("Park"));
    pCourse.add(new Person("Lee"));
    
    registerCourse(pCourse); // 일반인 과정 수강생: [Yoon, Park, Lee]
    // registerCourseStudent(pCourse); // 조상 타입
    registerCourseWorker(pCourse); // 일반인 과정 수강생: [Yoon, Park, Lee]
    
    System.out.println();
    
    Course<Worker> wCourse = new Course<>("직장인 과정", 3);
    wCourse.add(new Worker("Song"));
    wCourse.add(new Worker("Moon"));
    wCourse.add(new Worker("Kim"));

    registerCourse(wCourse); // 직장인 과정 수강생: [Song, Moon, Kim]
    // registerCourseStudent(wCourse); // 아무런 관계가 없는 클래스
    registerCourseWorker(wCourse); // 직장인 과정 수강생: [Song, Moon, Kim]

    System.out.println();

    Course<Student> sCourse = new Course<>("학생 과정", 3);
    sCourse.add(new Student("Student1"));
    sCourse.add(new Student("Student2"));
    sCourse.add(new Student("Student3"));

    registerCourse(sCourse); // 학생 과정 수강생: [Student1, Student2, Student3]
    registerCourseStudent(sCourse); // 학생 과정 수강생: [Student1, Student2, Student3]
    // registerCourseWorker(sCourse);
  }
}
