import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("<Quiz />", () => {
  it("renders without crashing", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("exist"); // Adjust text based on your button label
  });
});
