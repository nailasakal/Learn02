///<reference types="cypress"/>
describe("working with input", () => {
  it("visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 });
    cy.url().should("include", "login.html");
    cy.get("#user_login").clear(); // mengambil elemen dari 'id'
    cy.get("#user_login").type("username"); // 'id'
    cy.get('input[name="user_password"]').clear(); //'name'
    cy.get('input[name="user_password"]').type("password"); //'name'
    cy.get('input[name="user_remember_me"]').check(); //'name'
    cy.get('input[name="user_remember_me"]').should("be.checked"); //'name'
    cy.get('input[name="submit"]').click(); //'name'
  });
});
