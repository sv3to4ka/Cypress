describe('Login User Test', () => {
    it('should allow a user to log in', () => {
      // Visit the site
      cy.visit('https://demowebshop.tricentis.com/');
  
      // Click the Log in button
      cy.contains('Log in').click();
  
      // Enter the email
      cy.get('#Email').type('shlynyanska+emcronin1@gmail.com');
  
      // Enter the password
      cy.get('#Password').type('Password1!');
  
      // Click the Log in button
      cy.get('.login-button').click();
  
      // Wait for the customer info link
      cy.contains('Customer info')
        .should('be.visible')
        .should('have.attr', 'href', '/customer/info')
        .should('contain', 'shlynyanska+emcronin1@gmail.com');
    });
  });
  