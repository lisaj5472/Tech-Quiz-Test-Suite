describe("Quiz E2E", () => {
  it("starts and completes the quiz", () => {
    cy.visit("/");
    cy.contains("Start Quiz").click();
    // Add more Cypress steps here as needed to simulate the full quiz flow
  });
});
