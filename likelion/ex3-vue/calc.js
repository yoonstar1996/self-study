Vue.createApp({
  data() {
    return {
      x: 20,
      y: 30,
      result: 0,
    };
  },
  methods: {
    submitHandler() {
      this.result = this.x + this.y;
    },
  },
  template: ` <section id="calc-app">
      <h1>덧셈 계산기</h1>
      <form>
        <fieldset>
          <legend>계산기 입력폼</legend>
          <div>
            <label>x:</label>
            <input class="x-input" dir="rtl" v-model.number="x" />
            <label>y:</label>
            <input class="y-input" dir="rtl" v-model.number="y" />
            <span>=</span>
            <span class="result" v-text="result">0</span>
          </div>
          <hr />
          <div>
            <input type="submit" class="reset-btn" value="초기화" />
            <input
              type="submit"
              class="submit-btn"
              value="계산하기"
              @click.prevent="submitHandler"
            />
          </div>
        </fieldset>
      </form>
    </section>`,
}).mount("#app");
