describe('EPAM.com Company Logo Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/about');
    });
  
    it('should lead to the main page when clicking the company logo link', () => {
      cy.get('a.header__logo-container.mobile-logo').should('be.visible');
  
      cy.get('a.header__logo-container.mobile-logo').click();
  
      cy.url().should('eq', 'https://www.epam.com/');
    });
  });
  