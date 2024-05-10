/// <reference types="cypress" />
import mainPage from '../../../../pages/main.page';
import constants from '../../../../../resourcers/constants.json';
import endpoints from '../../../../../resourcers/endpoints.json';
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit main page', () => {
    mainPage.visit();
});
When('I sroll page down', () => {
    mainPage.contactWithUsElements.tiltleSection().scrollIntoView();
});
Then('Title Section and title and description are visible', () => {
    mainPage.contactWithUsElements.tiltleSection().should('have.text', constants.mainPage.contactSection.tiltleSection);
    mainPage.contactWithUsElements.tiltle().should('have.text', constants.mainPage.contactSection.tiltle);
    mainPage.contactWithUsElements.description().should('have.text', constants.mainPage.contactSection.description);
});

When('I input invalid email', () => {
    mainPage.contactWithUsElements.emailInput().type(constants.emails.invalidEmail);
});
Then('Border becomes red', () => {
    mainPage.contactWithUsElements.emailInput().should('have.css', 'border', constants.styleFiels.redBorder);
});

When('I input valid email', () => {
    mainPage.contactWithUsElements.emailInput().type(constants.emails.validEmail);
});
Then('Border becomes green', () => {
    mainPage.contactWithUsElements.emailInput().focus();
    mainPage.contactWithUsElements.emailInput().should('have.css', 'border', constants.styleFiels.greenBorder);
});

When('I click submit button', () => {
    mainPage.contactWithUsElements.submitBtn().click();
});
Then('Create account page opens', () => {
    cy.url().should('eq', endpoints.createAccount);
});
