class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      y: 20,
      result: 0,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleXChange = this.handleXChange.bind(this);
    this.handleYChange = this.handleYChange.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({
      result: parseInt(this.state.x) + parseInt(this.state.y),
    });
  }

  handleXChange(e) {
    this.setState({ x: e.target.value });
  }

  handleYChange(e) {
    this.setState({ y: e.target.value });
  }

  render() {
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
                value={this.state.x}
                onChange={this.handleXChange}
              />
              <label>y:</label>
              <input
                className="y-input"
                dir="rtl"
                value={this.state.y}
                onChange={this.handleYChange}
              />
              <span>=</span>
              <span className="result">{this.state.result}</span>
            </div>
            <hr />
            <div>
              <input type="submit" className="reset-btn" value="초기화" />
              <input
                onClick={this.clickHandler}
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
}

ReactDOM.render(<Calc />, document.querySelector("#root"));
