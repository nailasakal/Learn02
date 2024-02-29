/// <reference types="cypress" />
describe("My first test", () => {
  it("Visit The saucedemo", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").contains("Kitchen Sink"); //Query
    cy.contains("get").click(); //Query
    cy.url().should("include", "commands/querying"); //Assertion
  });
});
// "query" adalah cara untuk memilih elemen-elemen di halaman web menggunakan kode
//Ini memungkinkan Anda untuk menemukan dan berinteraksi dengan elemen-elemen HTML seperti tombol,
// formulir, teks, dan lainnya menggunakan penunjuk seperti id, kelas, atau jenis elemen
//Dengan menggunakan query, Anda dapat menulis skrip pengujian untuk menguji perilaku dan
//fungsionalitas halaman web dengan Cypress.

//Assertion (Penegasan): Assertion digunakan untuk memastikan bahwa perilaku atau keadaan tertentu terpenuhi dalam pengujian.
