import locators from './locators';

describe('Change Number of Items on the page', () => {
  it('should open Computers menu', () => {
    cy.visit(locators.webShopMainPage);
    cy.wait(3000);
    cy.contains('Computers').click();
    cy.wait(10000);
    cy.contains('Desktops').click({ force: true });
    cy.wait(3000);
    cy.get('.product-grid .item-box .product-item').should('have.length.greaterThan', 0);
    cy.get('select#products-pagesize').select('4');
    cy.get('select#products-pagesize').should('have.value', 'https://demowebshop.tricentis.com/desktops?pagesize=4');
  });
});
