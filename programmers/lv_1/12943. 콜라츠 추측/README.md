# 구분

코딩테스트 연습 > 연습 문제 > 콜라츠 추측

## [level 1] 콜라츠 추측 - 12943

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12943)

### 문제 설명

<p>
1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
</p>

```
1-1. 입력된 수가 짝수라면 2로 나눕니다.
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
```

<p>
예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
</p>

### 제한사항

<ul>
  <li>입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.</li>
</ul>

<hr>

### 입출력 예

<table class="table">
  <thead>
    <tr>
      <th>n</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>8</td>
    </tr>
    <tr>
      <td>16</td>
      <td>4</td>
    </tr>
    <tr>
      <td>626331</td>
      <td>-1</td>
    </tr>
  </tbody>
</table>

### 채점결과

정확성: 100.0<br/>
합계: 100.0 / 100.0

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
