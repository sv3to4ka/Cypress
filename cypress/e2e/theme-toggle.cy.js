describe('EPAM.com Theme Toggle Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/');
    });
  
    it('should toggle between Light and Dark mode', () => {
      cy.get('.hamburger-menu__button').click();
  
      cy.get('.theme-switcher-ui').each(($el) => {
        cy.wrap($el).click();
  
      cy.get('body').should('have.class', 'dark-theme');
      });
  
      cy.get('.hamburger-menu__button').click();
  
      cy.get('.hamburger-menu__button').should('have.attr', 'aria-expanded', 'false');
    });
  });
  
