// Import the locators object from 'locators.js'
import locators from '../../locators'; // Adjust the path as needed

describe('EPAM.com Company Logo Test', () => {
  before(() => {
    cy.visit('https://www.epam.com/about');
    // cy.viewport(1960, 980);
  });

  it('should lead to the main page when clicking the company logo link', () => {
    cy.get('a.header__logo-container.mobile-logo').should('be.visible');

    cy.get('a.header__logo-container.mobile-logo').click();

    cy.url().should('eq', locators.epamMainPage);

  });
});