import locators from './locators';

describe('Computers Menu Test', () => {
  it('should have three sub-menus under Computers', () => {
    cy.visit(locators.webShopMainPage);

    cy.contains('Computers').click();

    cy.contains('a', 'Desktops').should('exist');
    cy.contains('a', 'Notebooks').should('exist');
    cy.contains('a', 'Accessories').should('exist');
  });
});
