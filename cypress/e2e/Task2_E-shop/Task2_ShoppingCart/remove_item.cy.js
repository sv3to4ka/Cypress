import locators from './locators';

describe('Remove Item from Cart', () => {
  it('should remove a product from shopping cart', () => {
    cy.addToCart();
    cy.wait(3000);
    cy.get('input[name="removefromcart"]').check();
    cy.wait(3000);
    cy.get('input.button-2.update-cart-button').click();
    cy.wait(3000);
    cy.get('.shopping-cart-page .page-body').invoke('text').then((text) => {
        const trimmedText = text.trim();
        expect(trimmedText).to.equal('Your Shopping Cart is empty!');
      });
    });
});