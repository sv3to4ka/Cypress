describe('EPAM.com Location List Switch Test', () => {
    before(() => {
      // Visit EPAM.com
      cy.visit('https://www.epam.com/');
    });
  
    it('should switch the location list by region to APAC', () => {
      // Click the "APAC" region link
      cy.get('.tabs-23__link[data-item="2"]').click();
  
      // Check that the "APAC" region is selected and the other regions are not
      cy.get('.tabs-23__link[data-item="0"]').should('have.attr', 'aria-selected', 'false');
      cy.get('.tabs-23__link[data-item="1"]').should('have.attr', 'aria-selected', 'false');
      cy.get('.tabs-23__link[data-item="2"]').should('have.attr', 'aria-selected', 'true');
    });
  });
  