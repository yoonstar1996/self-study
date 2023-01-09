class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object가 있으면 그걸 리턴
    // ClassName으로부터 만든 object가 없으면, 만든다.
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }

  private constructor() {}
}

const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();

console.log(a1 === b1);
