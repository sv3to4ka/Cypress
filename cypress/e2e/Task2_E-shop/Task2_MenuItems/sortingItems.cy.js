import locators from './locators';

describe('Sorting Items', () => {
  it('should open Computers menu', () => {
    cy.visit(locators.webShopMainPage);
    cy.wait(3000);
    cy.contains('Computers').click();
    cy.wait(10000);
    cy.contains('Desktops').click({ force: true });
    cy.wait(3000);
    cy.get('.product-grid .item-box .product-item').should('have.length.greaterThan', 0);
    cy.get('select#products-orderby').select('Name: A to Z');
    cy.get('select#products-orderby').should('have.value', 'https://demowebshop.tricentis.com/desktops?orderby=5');
  });
});
