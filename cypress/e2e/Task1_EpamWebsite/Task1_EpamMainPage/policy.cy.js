describe('EPAM.com Policies List Test', () => {
    before(() => {
      cy.visit('https://www.epam.com/');
    });
  
    it('should check the policies list', () => {
      cy.scrollTo('bottom');
      cy.get('.policies-links-wrapper .fat-links').should('include.text', 'INVESTORS');
      cy.get('.policies-links-wrapper .fat-links').should('include.text', 'COOKIE POLICY');
      cy.get('.policies-links-wrapper .fat-links').should('include.text', 'OPEN SOURCE');
      cy.get('.policies-links-wrapper .fat-links').should('include.text', 'APPLICANT PRIVACY NOTICE');
      cy.get('.policies-links-wrapper .fat-links').should('include.text', 'PRIVACY POLICY');
      cy.get('.policies-links-wrapper .fat-links').should('include.text', 'WEB ACCESSIBILITY');
    });
  });
  