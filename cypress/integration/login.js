describe('Login', () => {
  it('enter credentials', () => {
    cy.visit('/');
    const { email, password } = Cypress.env('user');
    cy.get('#username').type(email);
    cy.get('#password').type(password);
    cy.findButton('Continue').click();
  });
});
