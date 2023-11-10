import locators from './locators'; 

describe('User Registration Test', () => {
  it('should register a user', () => {
    cy.visit(locators.webShopMainPage); 

    cy.get('.ico-register').click();

    cy.url().should('eq', locators.webShopRegisterPage);

    cy.get('#gender-male').check(); 
    cy.get('#FirstName').type('Emma3'); 
    cy.get('#LastName').type("Cronin3");
    cy.get('#Email').type('shlynyanska+emcronin3@gmail.com');
    cy.get('#Password').type('Password1!');
    cy.get('#ConfirmPassword').type('Password1!');

    cy.get('#register-button').click();

    cy.contains('Your registration completed')
      .should('be.visible');

    cy.get('.page-title h1').should('have.text', 'Register');
  });
});
