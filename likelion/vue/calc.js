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
}).mount("#app");
