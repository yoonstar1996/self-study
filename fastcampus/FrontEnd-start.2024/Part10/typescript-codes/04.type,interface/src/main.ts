interface Animal1 {
  name: string;
}

interface Bear1 extends Animal1 {
  honey: boolean;
}

const bear1: Bear1 = {
  name: "honey bear",
  honey: true,
};

type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  honey: boolean;
};

const bear2: Bear2 = {
  name: "honey bear",
  honey: true,
};

interface Animal3 {
  name: string;
}

interface Animal3 {
  honey: boolean;
}

const bear3: Animal3 = {
  name: "honey bear",
  honey: true,
};

// type Animal4 = {
//   name: string;
// };

// type Animal4 = {
//   honey: boolean;
// };
