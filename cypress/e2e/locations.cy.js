describe('EPAM.com Location List Switch Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/');
    });
  
    it('should switch the location list by region to APAC', () => {
      cy.get('.tabs-23__link[data-item="2"]').click();
      cy.get('.tabs-23__link[data-item="0"]').should('have.attr', 'aria-selected', 'false');
      cy.get('.tabs-23__link[data-item="1"]').should('have.attr', 'aria-selected', 'false');
      cy.get('.tabs-23__link[data-item="2"]').should('have.attr', 'aria-selected', 'true');
    });
  });
  