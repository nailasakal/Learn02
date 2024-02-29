/// <reference types="cypress" />
describe("My test Assertion", () => {
  it("Visit The example", () => {
    cy.visit("https://example.com/", { timeout: 10000 });
    cy.url().should("include", "example.com");
    cy.get("h1").should("be.visible");
  });
});
//Assertion (Penegasan): Assertion digunakan untuk memastikan bahwa perilaku atau keadaan tertentu terpenuhi dalam pengujian.
