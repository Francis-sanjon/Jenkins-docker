/* ==== Test Created with Cypress Studio ==== */
it('adactin', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://adactinhotelapp.com/');
  cy.get('#username').clear('Francis3535');
  cy.get('#username').type('Francis3535');
  cy.get('#password').clear('F');
  cy.get('#password').type('Francis@123');
  cy.get('#login').click();

});