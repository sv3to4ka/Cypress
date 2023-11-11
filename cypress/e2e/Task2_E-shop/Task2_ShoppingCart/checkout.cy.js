import locators from './locators';

describe('Checkout page', () => {
  it('should navigate to checkout page and check required fields', () => {
    cy.addToCart();
    cy.wait(3000);
    cy.get('#CountryId').select('Canada');
    cy.wait(3000);
    cy.get('#termsofservice').check();
    cy.wait(3000);
    cy.get('#checkout').click();
    cy.wait(3000);
    cy.get('#billing-buttons-container').click();

    });
});