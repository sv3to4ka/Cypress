// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { default: locators } = require("../e2e/Task2_E-shop/Task2_MenuItems/locators");

  Cypress.Commands.add('openComputersMenu', () => {
    cy.contains(locators.computersMenu).click();
  });
  
  Cypress.Commands.add('userLogin', () => {
      cy.visit('https://demowebshop.tricentis.com');
      cy.contains('Log in').click();
      cy.get('#Email').type('shlynyanska+emcronin3@gmail.com');
      cy.get('#Password').type('Password1!');
      cy.get('.login-button').click();
  
      cy.wait(10000);

    });

    Cypress.Commands.add('addToCart' , () => {
    cy.userLogin();
    cy.contains('Apparel & Shoes').click();
    cy.wait(3000);
    cy.contains("50's Rockabilly Polka Dot Top JR Plus Size").click({ force: true });
    cy.wait(3000);
    cy.get('#add-to-wishlist-button-5').click();
    cy.wait(3000);
    cy.get('p.content').should('have.text', 'The product has been added to your wishlist');
    cy.wait(3000);
    cy.contains('Wishlist').click();
    cy.wait(3000);
    cy.get('.cart-item-row').should('contain', "50's Rockabilly Polka Dot Top JR Plus Size");
    cy.wait(3000);
    cy.get('input[name="addtocart"]').check();
    cy.get('input.button-2.wishlist-add-to-cart-button').click();
    cy.wait(3000);
    cy.url().should('eq', 'https://demowebshop.tricentis.com/cart');
    cy.get('.cart-item-row').should('contain', "50's Rockabilly Polka Dot Top JR Plus Size");
  });
  
  