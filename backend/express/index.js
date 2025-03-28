const express = require("express");
const app = express();
const port = 4000;

// JSON 요청 처리
/**
 * HTTP 요청 중 body에 포함된 JSON 데이터를 자동으로 파싱해
 * 'req.body' 객체로 사용할 수 있게 만들어주는 미들웨어이다.
 * 이 설정이 없으면 'POST', 'PUT' 요청 시 body 데이터가 undefined로 나타난다.
 */
app.use(express.json());

app.get("/", (req, res) => {
  res.send("백엔드 서버 실행 중!");
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중~`);
});
