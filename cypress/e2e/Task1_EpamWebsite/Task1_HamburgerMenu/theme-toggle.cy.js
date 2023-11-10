describe('EPAM.com Theme Toggle Test', () => {
  before(() => {
    cy.visit('https://www.epam.com/');
  });

  it('should toggle between Light and Dark mode', () => {
    cy.wait(10000);
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.hamburger-menu__button').click();

    cy.wait(2000);

    cy.get('.mobile-theme-switcher .theme-switcher-label.body-text-small').should('contain', 'Dark Mode');

    cy.get('.theme-switcher-ui').eq(1).click({ force: true });


    cy.wait(2000);

    cy.get('.mobile-theme-switcher .theme-switcher-label.body-text-small').should('not.contain', 'Dark Mode');

    cy.get('.hamburger-menu__button[aria-expanded="true"]').click();
  });
});
