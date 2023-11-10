import locators from './locators';

describe('Login User Test', () => {
  it('should allow a user to log in', () => {
    cy.visit(locators.webShopMainPage);
    cy.contains('Log in').click();
    cy.get('#Email').type(locators.loginEmail);
    cy.get('#Password').type(locators.loginPassword);
    cy.get('.login-button').click();

    cy.wait(10000);

    cy.get('a.account').should('be.visible').should('contain', locators.loginEmail);

    cy.get('a.account').should('have.attr', 'href', '/customer/info');
  });
});

  