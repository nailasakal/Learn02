/// <reference types="cypress" />
describe("My first test", () => {
  it("Visit The example", () => {
    cy.visit("https://example.cypress.io");
  });
});
