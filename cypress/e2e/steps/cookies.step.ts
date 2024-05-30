/// <reference types="cypress" />
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../pages/main.page';

Then('Cookie modal is visible', () => {
    cy.wait(1000);
    mainPage.cookiesElements.cookieModal().should('be.visible');
});
When('I click on read more link', () => {
    mainPage.cookiesElements.readMoreLink().click({ force: true });
});
Then('Title is visible', () => {
    mainPage.cookiesElements.titleReadMorePage().should('have.text', 'Telnyx Cookie Policy');
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
When('I click on settings button', () => {
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });
});
Then('I check performance checkbox', () => {
    mainPage.cookiesElements.performanceCookies().check({ force: true });
    mainPage.cookiesElements.performanceCookies().should('be.checked');
});
Then('I check functional checkbox', () => {
    mainPage.cookiesElements.functionalCookies().check({ force: true });
    mainPage.cookiesElements.functionalCookies().should('be.checked');
});
Then('I check targetting checkbox', () => {
    mainPage.cookiesElements.targettingCookies().check({ force: true });
    mainPage.cookiesElements.targettingCookies().should('be.checked');
});
When('I click on confirm my choice', () => {
    mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });
});
Then('Cookie modal is close', () => {
    mainPage.cookiesElements.cookieModal().should('not.be.visible');
});
Given('Cookies is empty', () => {
    cy.getCookies().should('be.empty');
});
When('I click on accept all button', () => {
    mainPage.cookiesElements.acceptAllBtn().click();
});
When('Cookies is not empty', () => {
    cy.getCookies().should('have.length.greaterThan', 1);
});
