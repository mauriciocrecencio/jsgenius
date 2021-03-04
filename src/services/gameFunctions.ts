export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 9) + 1;
};

export const ArrayOneToNine = Array.from({ length: 9 }, (_, i) => i + 1);

export const displayNumber = (number: number | string) => {
  if (document.getElementById("display") !== null) {
    document.getElementById("display").textContent = String(number);
  }
};

export const arraysAreEqual = (a1: number[], a2: number[]) => {
  return JSON.stringify(a1) === JSON.stringify(a2);
};
