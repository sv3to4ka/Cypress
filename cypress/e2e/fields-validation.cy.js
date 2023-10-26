describe('EPAM.com Form Field Validation Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/about/who-we-are/contact');
    });
  
    it('should check form field validation', () => {
      cy.get('.button-ui[type="submit"]').click();
  
      cy.get('input[aria-required="true"]').each(($input) => {
        cy.wrap($input).should('have.attr', 'aria-invalid', 'true');
      });
  
      cy.get('select[aria-required="true"]').should('exist');
  
      
      cy.get('input[type="checkbox"][aria-required="true"]').should('have.attr', 'aria-invalid', 'true');
    });
  });
  