describe("Quiz E2E", () => {
  it("completes a full quiz flow", () => {
    // Intercept the API and mock the response
    cy.intercept("GET", "/api/questions/random", {
      statusCode: 200,
      body: [
        {
          question: "What is React?",
          answers: [
            { text: "Library", isCorrect: true },
            { text: "Framework", isCorrect: false },
            { text: "Language", isCorrect: false },
          ],
        },
        {
          question: "What does MERN stand for?",
          answers: [
            { text: "MongoDB, Express, React, Node", isCorrect: true },
            { text: "MySQL, Express, React, Node", isCorrect: false },
            { text: "MongoDB, Ember, Redux, Node", isCorrect: false },
          ],
        },
      ],
    }).as("getQuestions");

    cy.visit("/");
    cy.contains("Start Quiz").click();

    // Loop through the 2 mocked questions
    for (let i = 0; i < 2; i++) {
      cy.get("h2").should("exist"); // confirms question appears
      cy.get("button.btn-primary").first().click(); // clicks first answer button
    }

    // After finishing, should show score
    cy.contains("Quiz Completed").should("exist");
    cy.contains("Your score").should("exist");

    // Restart the quiz
    cy.contains("Take New Quiz").click();
    cy.get("h2").should("exist");
  });
});
