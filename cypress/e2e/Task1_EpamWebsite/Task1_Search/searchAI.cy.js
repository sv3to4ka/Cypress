describe('EPAM.com Search Function Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/');
    });
  
    it('should perform a search for "AI"', () => {
      cy.get('.header-search__button').click();
  
      cy.get('#new_form_search').type('AI');
  
      cy.contains('Find').click();
  
      cy.get('.search-results__item').should('be.visible');
  
      cy.get('.search-results__counter').should('include.text', 'results for "AI"');
    });
  });
  