/// <reference types="cypress" />
import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../../pages/main.page';

Given('Cookies is empty', () => {
    cy.getCookies().should('be.empty');
});

Given('I visit main page', () => {
    mainPage.visit();
});
When('I click on accept all button', () => {
    mainPage.cookiesElements.acceptAllBtn().click();
});
When('Cookie modal is close', () => {
    mainPage.cookiesElements.cookieModal().should('not.visible');
});
When('Cookies is not empty', () => {
    cy.getCookies().should('have.length.greaterThan', 1);
});


