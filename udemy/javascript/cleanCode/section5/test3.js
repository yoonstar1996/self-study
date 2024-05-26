function operateTime(inputs, operators, is) {
  inputs[0].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });

  inputs[1].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// 위의 코드를 아래와 같이 수정

function operateTime(inputs, operators, is) {
  const [firstInput, secondInput] = inputs;
  firstInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });

  secondInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// 위의 코드를 아래와 같이 수정

function operateTime([firstInput, secondInput], operators, is) {
  firstInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });

  secondInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

function GroupButton() {
  const confirmButton = document.getElementsByTagName("button")[0];
  const cancelButton = document.getElementsByTagName("button")[1];
  const resetButton = document.getElementsByTagName("button")[2];
}

// 위의 코드를 아래와 같이 수정

function GroupButton() {
  const [confirmButton, cancelButton, resetButton] =
    document.getElementsByTagName("button");
}

function formatDate(targetDate) {
  const date = targetDate.toISOString().split("T")[0];

  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}

// 위의 코드를 아래와 같이 수정

function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split("T");

  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}
