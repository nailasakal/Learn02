/// <reference types="cypress" />
describe("My first test", () => {
  it("Visit The books", () => {
    cy.visit("https://books.toscrape.com/index.html", { timeout: 10000 });
    cy.url().should("include", "index.html");
    cy.get("a").contains("Travel").click();
    cy.get("h1").should("have.text", "Travel");
  });
});
