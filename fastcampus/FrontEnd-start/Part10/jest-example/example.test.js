describe("expect test", () => {
  it("37 to equal 37", () => {
    expect(37).toBe(37);
  });
  it("{age:39} to equal {age:39}", () => {
    expect({ age: 39 }).toEqual({ age: 39 });
  });
  it(".toHaveLength", () => {
    expect("Hello").toHaveLength(5);
  });
  it(".toHaveProperty", () => {
    expect({ name: "mark" }).toHaveProperty("name");
    expect({ name: "mark" }).toHaveProperty("name", "mark");
  });
  it(".toBeDefined", () => {
    expect({ name: "mark" }.name).toBeDefined();
  });
  it(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(5);
  });
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
