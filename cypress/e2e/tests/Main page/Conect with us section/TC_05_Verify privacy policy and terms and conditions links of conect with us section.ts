/// <reference types="cypress" />
import mainPage from '../../../../pages/main.page';
import endpoints from '../../../../../resourcers/endpoints.json';
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit main page', () => {
    mainPage.visit();
});
When('I sroll page down', () => {
    mainPage.contactWithUsElements.tiltleSection().scrollIntoView();
});

Then('I click on privacy policy link', () => {
    mainPage.contactWithUsElements.privacyPolicyLink().click();
});
Then('Privacy policy page opens', () => {
    cy.url().should('eq', endpoints.privacyPolicy);
});
Then('I come back to main page', () => {
    cy.go('back');
});

When('I click on terms and conditional link', () => {
    mainPage.contactWithUsElements.termsAndCondition().click();
});
Then('Terms and conditional page opens', () => {
    cy.url().should('eq', endpoints.termsAndConditions);
});
