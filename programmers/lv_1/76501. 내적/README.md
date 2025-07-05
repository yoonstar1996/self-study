# 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 내적

## [level 1] 내적 - 70128

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/70128)

### 문제 설명

<p>
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.<br />
이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
</p>

### 제한사항

<ul>
  <li>a, b의 길이는 1 이상 1,000 이하입니다.</li>
  <li>a, b의 모든 수는 -1,000 이상 1,000 이하입니다.</li>
</ul>

<hr>

### 입출력 예

<table class="table">
  <thead>
    <tr>
      <th>a</th>
      <th>b</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[1,2,3,4]</td>
      <td>[-3,-1,0,2]</td>
      <td>3</td>
    </tr>
    <tr>
      <td>[-1,0,1]</td>
      <td>[1,0,-1]</td>
      <td>-2</td>
    </tr>
  </tbody>
</table>

### 입출력 예 설명

입출력 예 #1

<ul>
  <li>a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.</li>
</ul>

입출력 예 #2

<ul>
  <li>a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.</li>
</ul>

### 채점결과

정확성: 100.0<br/>
합계: 100.0 / 100.0

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
