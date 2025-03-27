function Calc() {
  console.log("init");

  const [x, setX] = React.useState(30);
  const [y, setY] = React.useState(20);
  const [result, setResult] = React.useState(0);

  function clickHandler(e) {
    e.preventDefault();
    setResult(parseInt(x) + parseInt(y));
    console.log("in handler");
  }

  return (
    <section id="calc-app">
      <h1>덧셈 계산기</h1>
      <form>
        <fieldset>
          <legend>계산기 입력폼</legend>
          <div>
            <label>x:</label>
            <input
              className="x-input"
              dir="rtl"
              value={x}
              onChange={(e) => setX(e.target.value)}
            />
            <label>y:</label>
            <input
              className="y-input"
              dir="rtl"
              value={y}
              onChange={(e) => setY(e.target.value)}
            />
            <span>=</span>
            <span className="result">{result}</span>
          </div>
          <hr />
          <div>
            <input type="submit" className="reset-btn" value="초기화" />
            <input
              onClick={clickHandler}
              type="submit"
              className="submit-btn"
              value="계산하기"
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
}

ReactDOM.render(<Calc />, document.querySelector("#root"));
