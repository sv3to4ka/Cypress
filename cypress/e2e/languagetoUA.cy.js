describe('EPAM.com Language Switch Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/');
    });
  
    it('should switch the site\'s language to Ukraine', () => {
      // Wait for 10 seconds (adjust as needed)
      cy.wait(10000);
  
      // Click "Accept All"
      cy.get('#onetrust-accept-btn-handler').click();
  
      // Click the menu icon to open the menu
      cy.get('.hamburger-menu__button').click({ force: true });
  
      // Click the Language icon with (EN) to open the language selector
      cy.contains('.location-selector__button-language-prefix', '(EN)').click({ force: true });
  
      // Select Ukrainian language
      cy.get('.mobile-location-selector__link').contains('Україна').click({ force: true });
  
      // Check that the site's context has changed to UA
      cy.get('html').should('have.attr', 'lang', 'uk');
    });
  });
  