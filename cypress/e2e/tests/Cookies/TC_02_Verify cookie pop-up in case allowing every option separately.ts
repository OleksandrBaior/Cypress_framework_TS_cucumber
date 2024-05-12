/// <reference types="cypress" />
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../../pages/main.page';

Given('I visit main page', () => {
    mainPage.visit();
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





