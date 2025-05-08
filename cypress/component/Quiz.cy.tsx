import { mount } from "cypress/react";
import Quiz from "../../client/src/components/Quiz";

describe("<Quiz />", () => {
  it("renders and displays the Start Quiz button", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("exist");
  });

  it("starts the quiz and displays a question", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.get("h2").should("exist"); // assumes the question is inside an <h2>
  });
});
