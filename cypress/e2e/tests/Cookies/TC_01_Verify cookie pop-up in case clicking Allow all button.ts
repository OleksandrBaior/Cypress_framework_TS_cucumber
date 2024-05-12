/// <reference types="cypress" />
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../../pages/main.page';

Given('I visit main page', () => {
    mainPage.visit();
});
Then('Cookie modal is visible', () => {
    mainPage.cookiesElements.cookieModal().should('not.be.visible');
});
When('I click on read more link', () => {
    mainPage.cookiesElements.readMoreLink().click({ force: true });
});
Then('Title is visible', () => {
    mainPage.cookiesElements.titleReadMorePage().should('have.text', 'Telnyx Cookie Policy');
});

When('I come back to main page', () => {
    cy.go('back');
    cy.reload();
});
Then('Cookies Settings button is visible', () => {
    mainPage.cookiesElements.cookiesSettingsBtn().should('be.visible');
});

When('I click on cookies settings button', () => {
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });
});
Then('Cookies Settings modal is visible', () => {
    mainPage.cookiesElements.cookiesSettingsModal().should('be.visible');
});

When('I click on close button', () => {
    mainPage.cookiesElements.cookiesSettingsCloseBtn().click({ force: true });
});
Then('Cookies Settings modal is close', () => {
    mainPage.cookiesElements.cookiesSettingsModal().should('not.be.visible');
});
Then('Cookies Settings button is present', () => {
    mainPage.cookiesElements.cookiesSettingsBtn().should('be.visible');
});

When('I click on cookies settings button again', () => {
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true }).click({ force: true });
});
Then('Cookies Settings modal is present', () => {
    mainPage.cookiesElements.cookiesSettingsModal().should('be.visible');
    mainPage.cookiesElements.confirmMyChoiceBtn().should('be.visible');
});

When('I click on confirm my choice button', () => {
    mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });
});
Then('Cookies modal is visible', () => {
    mainPage.cookiesElements.cookieModal().should('not.be.visible');
});
