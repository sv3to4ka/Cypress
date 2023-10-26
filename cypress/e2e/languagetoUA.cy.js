describe('EPAM.com Language Switch Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/');
    });
  
    it('should switch the site\'s language to Ukraine', () => {
      cy.wait(10000);
      cy.get('#onetrust-accept-btn-handler').click();
      cy.get('.hamburger-menu__button').click({ force: true });
      cy.contains('.location-selector__button-language-prefix', '(EN)').click({ force: true });
      cy.get('.mobile-location-selector__link').contains('Україна').click({ force: true });
      cy.get('html').should('have.attr', 'lang', 'uk');
    });
  });
  