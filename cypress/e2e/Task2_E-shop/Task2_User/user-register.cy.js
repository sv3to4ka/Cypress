describe('User Registration Test', () => {
    it('should register a user', () => {
      cy.visit('https://demowebshop.tricentis.com/');
  
      cy.get('.ico-register').click();
  
      cy.url().should('eq', 'https://demowebshop.tricentis.com/register');
  
      cy.get('#gender-male').check(); 
      cy.get('#FirstName').type('Emma'); 
      cy.get('#LastName').type("Cronin");
      cy.get('#Email').type('shlynyanska+emcronin2@gmail.com');
      cy.get('#Password').type('Password1!');
      cy.get('#ConfirmPassword').type('Password1!');
  
      cy.get('#register-button').click();
  
      cy.contains('Your registration completed')
        .should('be.visible');
  
      cy.get('.page-title h1').should('have.text', 'Register');
    });
  });
  