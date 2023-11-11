import locators from './locators';

describe('Wishlist Test', () => {
  it('should add a product to the wishlist and verify', () => {
    cy.userLogin();
    cy.contains('Apparel & Shoes').click();
    cy.wait(3000);
    cy.contains("50's Rockabilly Polka Dot Top JR Plus Size").click({ force: true });
    cy.wait(3000);
    cy.get('#add-to-wishlist-button-5').click();
    cy.wait(3000);
    cy.get('p.content').should('have.text', 'The product has been added to your wishlist');
    cy.wait(3000);
    cy.contains('Wishlist').click();
    cy.wait(3000);
    cy.get('.cart-item-row').should('contain', "50's Rockabilly Polka Dot Top JR Plus Size");
});
});
