import '@testing-library/cypress/add-commands';

Cypress.Commands.add('verifyButton', (text) => {
  cy.findByRole('button', { name: text }).should('exist');
});

Cypress.Commands.add('findButton', (text) =>
  cy.findByRole('button', { name: text })
);

Cypress.Commands.add(
  'verifyInputErrors',
  { prevSubject: true },
  (subject, errorsMap, { containerTestId }) => {
    cy.findByTestId(containerTestId).within(() => {
      errorsMap.forEach(([input, error]) => {
        if (input === '') {
          cy.wrap(subject).focus().blur();
        } else {
          cy.wrap(subject).focus().type(input).blur();
        }
        cy.findByText(error).should('exist');
        cy.wrap(subject).clear();
      });
    });
  }
);
