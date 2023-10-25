describe('EPAM.com Theme Toggle Test', () => {
    before(() => {
      // Visit EPAM.com
      cy.visit('https://www.epam.com/');
    });
  
    it('should toggle between Light and Dark mode', () => {
      // Click the menu icon to open the menu
      cy.get('.hamburger-menu__button').click();
  
      // Find and click all elements with class 'theme-switcher-ui'
      cy.get('.theme-switcher-ui').each(($el) => {
        cy.wrap($el).click();
  
        // Verify that the theme has changed
        cy.get('body').should('have.class', 'dark-theme'); // Adjust the class name if necessary
      });
  
      // Click the menu icon again to close the menu
      cy.get('.hamburger-menu__button').click();
  
      // Add an assertion to check that the menu is closed
      cy.get('.hamburger-menu__button').should('have.attr', 'aria-expanded', 'false');
    });
  });
  
