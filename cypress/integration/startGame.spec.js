context("Start Game", () => {
  it("The game starts", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Iniciar Jogo");
    cy.get(".sc-dlfnbm").click();
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => cy.contains(number));
  });
});
