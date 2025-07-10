# 구분

코딩테스트 연습 > 연습 문제 > 크기가 작은 부분 문자열

## [level 1] 크기가 작은 부분 문자열 - 147355

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/147355)

### 문제 설명

<p>
숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.<br />
예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.
</p>

### 제한사항

<ul>
  <li>1 ≤ p의 길이 ≤ 18</li>
  <li>p의 길이 ≤ t의 길이 ≤ 10,000</li>
  <li>t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.</li>
</ul>

<hr>

### 입출력 예

<table class="table">
  <thead>
    <tr>
      <th>t</th>
      <th>p</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"3141592"</td>
      <td>"271"</td>
      <td>2</td>
    </tr>
    <tr>
      <td>"500220839878"</td>
      <td>"7"</td>
      <td>8</td>
    </tr>
    <tr>
      <td>"10203"</td>
      <td>"15"</td>
      <td>3</td>
    </tr>
  </tbody>
</table>

### 채점결과

정확성: 100.0<br/>
합계: 100.0 / 100.0

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
