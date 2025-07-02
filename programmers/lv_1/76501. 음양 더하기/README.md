# 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 음양 더하기

## [level 1] 음양 더하기 - 76501

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/76501)

### 문제 설명

<p>
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
</p>

### 제한사항

<ul>
  <li>
    absolutes의 길이는 1 이상 1,000 이하입니다.
    <ul>
      <li>absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.</li>
    </ul>
  </li>
  <li>
    signs의 길이는 absolutes의 길이와 같습니다.
    <ul>
      <li>
        signs[i]가 참이면 absolutes[i]의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
      </li>
    </ul>
  </li>
</ul>

<hr>

### 입출력 예

<table class="table">
  <thead>
    <tr>
      <th>absolutes</th>
      <th>signs</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[4,7,12]</td>
      <td>[true,false,true]</td>
      <td>9</td>
    </tr>
    <tr>
      <td>[1,2,3]</td>
      <td>[false,false,true]</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

### 채점결과

정확성: 100.0<br/>
합계: 100.0 / 100.0

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
