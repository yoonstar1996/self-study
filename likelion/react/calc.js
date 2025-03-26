ReactDOM.render(
  <section id="calc-app">
    <h1>덧셈 계산기</h1>
    <form>
      <fieldset>
        <legend>계산기 입력폼</legend>
        <div>
          <label>x:</label>
          <input className="x-input" dir="rtl" />
          <label>y:</label>
          <input className="y-input" dir="rtl" />
          <span>=</span>
          <span className="result">0</span>
        </div>
        <hr />
        <div>
          <input type="submit" className="reset-btn" value="초기화" />
          <input type="submit" className="submit-btn" value="계산하기" />
        </div>
      </fieldset>
    </form>
  </section>,
  document.querySelector("#root")
);
