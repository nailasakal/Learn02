/// <reference types="cypress" />
describe("My first test", () => {
  it("Visit The Example", () => {
    cy.visit("https://example.cypress.io"); 
  });
});
// visit adalah mengunjungi situs yang ingin di uji