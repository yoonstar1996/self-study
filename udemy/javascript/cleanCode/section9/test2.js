function handleSubmit(input) {
  // 중요하지 않다고 생각하는 핸들링

  try {
    // 예외가 예상되는 코드 혹은 발생시킬 코드
  } catch (error) {
    // 예외를 처리하는 코드
    /**
     * 1. 개발자를 위한 예외 처리
     * 2. 사용자를 위한 예외 처리
     * 3. 사용자에게 사용을 제안
     * 4. 에러 로그
     */

    // 1. 개발자를 위한 예외 처리 => 동료 개발자, 나에게 제안을 위해
    console.warn(error);
    console.error(error);

    // 2. 사용자를 위한 예외 처리 => (사용자가 볼 수 있다고 생각)
    alert(error); // X
    alert(error.message); // O

    // 3. 사용자에게 사용을 제안
    history.back();
    history.go("안전한 어딘가로");
    clear();
    element.focus(); // => 어딘가로 이동시켜서 다시 한번 사용자에게 알려주기

    // 4. 에러 로그 수집
    sentry.전송();

    // 5. 비추천하지만 필요에 따라 사용되는 경우
    handleSubmit();
  } finally {
    // 데이터 분석을 위한 로그
  }
}
