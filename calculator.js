let calculator = {
  sum() {
    return this.a + this.b;
  },

  subs() {
    return this.a - this.b;
  },

  mul() {
    return this.a * this.b;
  },

  div() {
    return this.a / this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};
