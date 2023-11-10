describe('EPAM.com Language Switch Test', () => {
  before(() => {
    cy.visit('https://www.epam.com/');
  });

  it('should switch the site language to Ukraine', () => {
    cy.wait(10000);

    cy.origin('https://careers.epam.ua', () => {
cy.on('uncaught:exception', (e) => {
  if (e.message.includes('Things went bad')) {
    // we expected this error, so let's ignore it
    // and let the test continue
    return false
  }
})
});
cy.visit('https://careers.epam.ua/');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.hamburger-menu__button').click({ force: true });
    cy.contains('.location-selector__button-language-prefix', '(EN)').click({ force: true });
    cy.get('.mobile-location-selector__link').contains('Україна').click({ force: true });
    cy.wait(10000);
    cy.get('#onetrust-button-group').click();
    cy.get('html').should('have.attr', 'lang', 'uk');
  });
});