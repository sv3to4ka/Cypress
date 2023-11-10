describe('EPAM Title Test', () => {
    it('Visits EPAM.com and checks the title', () => {
      cy.visit('https://www.epam.com/');
      cy.title().should('eq', 'EPAM | Software Engineering & Product Development Services');
    });
  });
  