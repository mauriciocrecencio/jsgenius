context("Go to Rankings", () => {
  it("Should show all ranked users", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      '[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG0SURBVHgB7ZY7TsNAEIb/WTs8JApT8pJCy0MKJyAICYmSExBuwA0QJwFOAB2BBnOCBEFoAYFISUpDEg87vBQikD1rS2nySSuv16Od3zPjWQMZaF6flh/tQAZ8ZMGjPe9zFsIRA0fk7ZlRhh1ZokAa47vacVAojBQ9mBIb2hbnss5AHd143xC1ok5Un1/ZaqXdM7WAp5vzkiG+sO6ChC1bMdPa7NJGHXkKSCdC51xQ1YBsLA7EUf8zBqudC6oIfPPcOHvpj4IImFncnIQS9VdwV7sI/koBgQIpUihRCxjzo5JcbeUfvr7xPMmwc1kbH5lYhRJ9I/I8tg7L0wsblz2rO83a6X6n8KaOwMBRFaF9y2KSTYSopWlEuhSM0gF/db9/TXg8tJc1pMT5LMiLgQvIchyf2HR85JoIFTjiLoAKuzOL6w8yfW5UK3DEPQVxexc54C6AkIsAv9moHiQZdWI+mlveDKFA/pJ8+WlJEmB7eiXRiEwIJT6hmGpvOECGKmC6/7knUyamIEb3BEqcaoDZD6d6DiOZs+lcwQG3CKAdNm+rvxcZTjgJsA2oiJwYngVDAUMB79VymcuQ9gu7AAAAAElFTkSuQmCC"]'
    ).click();

    // cy.contains("Iniciar Jogo");
    // cy.get(".sc-dlfnbm").click();
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => cy.contains(number));
  });
});
describe("Get Rankings", () => {
  it("Get all Marvel characters", () => {
    cy.request(
      "https://us-central1-prova-front-letras.cloudfunctions.net/rankings"
    );
  });
});
